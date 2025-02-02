import React, { Component } from 'react';
import i18next from 'i18next';

import messageDispatcher from '../lib/MessageDispatcher';

class DatabaseParams extends Component {
  constructor(props) {
    super(props);
    
    if (!props.mod.parameters) {
      props.mod.parameters = {};
    }
    
    if (props.mod.parameters["use-glewlwyd-connection"] === undefined) {
      props.mod.parameters["use-glewlwyd-connection"] = true;
    }
    
    if (props.mod.parameters["pbkdf2-iterations"] === undefined) {
      props.mod.parameters["pbkdf2-iterations"] = 150000;
    }
    
    this.state = {
      mod: props.mod,
      role: props.role,
      check: props.check,
      errorList: {}
    };
    
    if (this.state.check) {
      this.checkParameters();
    }
    
    this.toggleInternalConnection = this.toggleInternalConnection.bind(this);
    this.changeDbType = this.changeDbType.bind(this);
    this.getDbType = this.getDbType.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.addDataFormat = this.addDataFormat.bind(this);
    this.deleteDataFormat = this.deleteDataFormat.bind(this);
    this.checkParameters = this.checkParameters.bind(this);
    this.changedataFormatConvert = this.changedataFormatConvert.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if (!nextProps.mod.parameters) {
      nextProps.mod.parameters = {};
    }
    
    if (nextProps.mod && nextProps.mod.parameters && nextProps.mod.parameters["use-glewlwyd-connection"] === undefined) {
      nextProps.mod.parameters["use-glewlwyd-connection"] = true;
    }
    
    if (nextProps.mod && nextProps.mod.parameters && nextProps.mod.parameters["pbkdf2-iterations"] === undefined) {
      nextProps.mod.parameters["pbkdf2-iterations"] = 150000;
    }
    
    this.setState({
      mod: nextProps.mod,
      role: nextProps.role,
      check: nextProps.check
    }, () => {
      if (this.state.check) {
        this.checkParameters();
      }
    });
  }
  
  toggleInternalConnection(e) {
    var mod = this.state.mod;
    mod.parameters["use-glewlwyd-connection"] = !mod.parameters["use-glewlwyd-connection"];
    this.setState({mod: mod});
  }
  
  changeDbType(e, type) {
    e.preventDefault();
    var mod = this.state.mod;
    mod.parameters["connection-type"] = type;
    this.setState({mod: mod});
  }
  
  getDbType(type) {
    if (type === "sqlite") {
      return i18next.t("admin.mod-database-type-sqlite");
    } else if (type === "mariadb") {
      return i18next.t("admin.mod-database-type-mariadb");
    } else if (type === "postgre") {
      return i18next.t("admin.mod-database-type-postgre");
    } else {
      return i18next.t("admin.mod-database-select-type");
    }
  }
  
  changeValue(e, property, isNumber = false) {
    var mod = this.state.mod;
    if (!isNumber) {
      mod.parameters[property] = e.target.value;
    } else {
      mod.parameters[property] = parseInt(e.target.value);
    }
    this.setState({mod: mod});
  }
  
  addDataFormat() {
    var mod = this.state.mod;
    if (!mod.parameters["data-format"]) {
      mod.parameters["data-format"] = {};
    }
    if (this.state.role === "user") {
      mod.parameters["data-format"][""] = {multiple: false, read: true, write: true, "profile-read": false, "profile-write": false};
    } else if (this.state.role === "client") {
      mod.parameters["data-format"][""] = {multiple: false, read: true, write: true};
    }
    this.setState({mod: mod});
  }
  
  changeDataFormatProperty(e, property) {
    var mod = this.state.mod;
    mod.parameters["data-format"][e.target.value] = mod.parameters["data-format"][property];
    delete(mod.parameters["data-format"][property]);
    this.setState({mod: mod});
  }
  
  changedataFormatConvert(e, property, convert) {
    var mod = this.state.mod;
    if (convert) {
      mod.parameters["data-format"][property]["convert"] = convert;
    } else {
      delete(mod.parameters["data-format"][property]["convert"]);
    }
    this.setState({mod: mod});
  }
  
  toggleDataFormatValue(e, property, value) {
    var mod = this.state.mod;
    mod.parameters["data-format"][property][value] = !mod.parameters["data-format"][property][value];
    this.setState({mod: mod});
  }
  
  deleteDataFormat(e, property) {
    var mod = this.state.mod;
    delete(mod.parameters["data-format"][property]);
    this.setState({mod: mod});
  }
  
  checkParameters() {
    var errorList = {}, hasError = false;
    if (!this.state.mod.parameters["use-glewlwyd-connection"]) {
      if (this.state.mod.parameters["connection-type"] === "sqlite") {
        if (!this.state.mod.parameters["sqlite-dbpath"]) {
          hasError = true;
          errorList["sqlite-dbpath"] = i18next.t("admin.mod-database-sqlite-dbpath-error")
        }
      } else if (this.state.mod.parameters["connection-type"] === "mariadb") {
        if (!this.state.mod.parameters["mariadb-host"]) {
          hasError = true;
          errorList["mariadb-host"] = i18next.t("admin.mod-database-mariadb-host-error")
        }
        if (!this.state.mod.parameters["mariadb-user"]) {
          hasError = true;
          errorList["mariadb-user"] = i18next.t("admin.mod-database-mariadb-user-error")
        }
        if (!this.state.mod.parameters["mariadb-password"]) {
          hasError = true;
          errorList["mariadb-password"] = i18next.t("admin.mod-database-mariadb-password-error")
        }
        if (!this.state.mod.parameters["mariadb-dbname"]) {
          hasError = true;
          errorList["mariadb-dbname"] = i18next.t("admin.mod-database-mariadb-dbname-error")
        }
      } else if (this.state.mod.parameters["connection-type"] === "postgre") {
        if (!this.state.mod.parameters["postgre-conninfo"]) {
          hasError = true;
          errorList["postgre-conninfo"] = i18next.t("admin.mod-database-postgre-conninfo-error")
        }
      } else {
        hasError = true;
        errorList["connection-type"] = i18next.t("admin.mod-database-connection-type-error")
      }
      this.state.mod.parameters["data-format"] && Object.keys(this.state.mod.parameters["data-format"]).map(property => {
        if (!property) {
          hasError = true;
          errorList["data-format"] = i18next.t("admin.mod-ldap-data-format-property-error");
        }
      });
    } else {
      this.state.mod.parameters["data-format"] && Object.keys(this.state.mod.parameters["data-format"]).map(property => {
        if (!property) {
          hasError = true;
          errorList["data-format"] = i18next.t("admin.mod-data-format-property-error");
        }
      });
    }
    if (this.state.mod.parameters["pbkdf2-iterations"] === null || this.state.mod.parameters["pbkdf2-iterations"] <= 0) {
      hasError = true;
      errorList["pbkdf2-iterations"] = i18next.t("admin.mod-database-pbkdf2-iterations-error")
    }
    if (!hasError) {
      this.setState({errorList: {}}, () => {
        messageDispatcher.sendMessage('ModEdit', {type: "modValid"});
      });
    } else {
      this.setState({errorList: errorList}, () => {
        messageDispatcher.sendMessage('ModEdit', {type: "modInvalid"});
      });
    }
  }
  
  render() {
    var useInternalConnection = 
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="mod-database-use-internal-connection" onChange={(e) => this.toggleInternalConnection(e)} checked={this.state.mod.parameters["use-glewlwyd-connection"]} />
        <label className="form-check-label" htmlFor="mod-database-use-internal-connection">{i18next.t("admin.mod-database-use-internal-connection")}</label>
      </div>;
    var pbkdf2Iterations = 
      <div className="form-group">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="mod-database-pbkdf2-iterations">{i18next.t("admin.mod-database-pbkdf2-iterations")}</label>
          </div>
          <input type="number"
                 min="0" 
                 step="1" 
                 className={this.state.errorList["pbkdf2-iterations"]?"form-control is-invalid":"form-control"} 
                 id="mod-database-pbkdf2-iterations" 
                 onChange={(e) => this.changeValue(e, "pbkdf2-iterations", true)} 
                 value={this.state.mod.parameters["pbkdf2-iterations"]} 
                 placeholder={i18next.t("admin.mod-database-pbkdf2-iterations-ph")} />
        </div>
        {this.state.errorList["pbkdf2-iterations"]?<span className="error-input">{this.state.errorList["pbkdf2-iterations"]}</span>:""}
      </div>
    var selectDbType;
    var dbParams;
    if (!this.state.mod.parameters["use-glewlwyd-connection"]) {
      selectDbType = <div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownDbType" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.getDbType(this.state.mod.parameters["connection-type"])}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownDbType">
            <a className="dropdown-item" href="#" onClick={(e) => this.changeDbType(e, 'sqlite')}>{i18next.t("admin.mod-database-type-sqlite")}</a>
            <a className="dropdown-item" href="#" onClick={(e) => this.changeDbType(e, 'mariadb')}>{i18next.t("admin.mod-database-type-mariadb")}</a>
            <a className="dropdown-item" href="#" onClick={(e) => this.changeDbType(e, 'postgre')}>{i18next.t("admin.mod-database-type-postgre")}</a>
          </div>
        </div>
        {this.state.errorList["connection-type"]?<span className="error-input">{this.state.errorList["connection-type"]}</span>:""}
      </div>;
      if (this.state.mod.parameters["connection-type"] === "sqlite") {
        dbParams = <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="mod-database-sqlite-dbpath">{i18next.t("admin.mod-database-sqlite-dbpath")}</label>
            </div>
            <input type="text" className={this.state.errorList["sqlite-dbpath"]?"form-control is-invalid":"form-control"} id="mod-database-sqlite-dbpath" onChange={(e) => this.changeValue(e, "sqlite-dbpath")} value={this.state.mod.parameters["sqlite-dbpath"]} placeholder={i18next.t("admin.mod-database-sqlite-dbpath-ph")} />
          </div>
          {this.state.errorList["sqlite-dbpath"]?<span className="error-input">{this.state.errorList["sqlite-dbpath"]}</span>:""}
        </div>;
      } else if (this.state.mod.parameters["connection-type"] === "mariadb") {
        dbParams = <div><div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="mod-database-mariadb-host">{i18next.t("admin.mod-database-mariadb-host")}</label>
            </div>
            <input type="text" className={this.state.errorList["mariadb-host"]?"form-control is-invalid":"form-control"} id="mod-database-mariadb-host" onChange={(e) => this.changeValue(e, "mariadb-host")} value={this.state.mod.parameters["mariadb-host"]} placeholder={i18next.t("admin.mod-database-mariadb-host-ph")} />
          </div>
          {this.state.errorList["mariadb-host"]?<span className="error-input">{this.state.errorList["mariadb-host"]}</span>:""}
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="mod-database-mariadb-user">{i18next.t("admin.mod-database-mariadb-user")}</label>
            </div>
            <input type="text" className={this.state.errorList["mariadb-user"]?"form-control is-invalid":"form-control"} id="mod-database-mariadb-user" onChange={(e) => this.changeValue(e, "mariadb-user")} value={this.state.mod.parameters["mariadb-user"]} placeholder={i18next.t("admin.mod-database-mariadb-user-ph")} />
          </div>
          {this.state.errorList["mariadb-user"]?<span className="error-input">{this.state.errorList["mariadb-user"]}</span>:""}
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="mod-database-mariadb-password">{i18next.t("admin.mod-database-mariadb-password")}</label>
            </div>
            <input type="password" className={this.state.errorList["mariadb-password"]?"form-control is-invalid":"form-control"} id="mod-database-mariadb-password" onChange={(e) => this.changeValue(e, "mariadb-password")} value={this.state.mod.parameters["mariadb-password"]} placeholder={i18next.t("admin.mod-database-mariadb-password-ph")} />
          </div>
          {this.state.errorList["mariadb-password"]?<span className="error-input">{this.state.errorList["mariadb-password"]}</span>:""}
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="mod-database-mariadb-dbname">{i18next.t("admin.mod-database-mariadb-dbname")}</label>
            </div>
            <input type="text" className={this.state.errorList["mariadb-dbname"]?"form-control is-invalid":"form-control"} id="mod-database-mariadb-dbname" onChange={(e) => this.changeValue(e, "mariadb-dbname")} value={this.state.mod.parameters["mariadb-dbname"]} placeholder={i18next.t("admin.mod-database-mariadb-dbname-ph")} />
          </div>
          {this.state.errorList["mariadb-dbname"]?<span className="error-input">{this.state.errorList["mariadb-dbname"]}</span>:""}
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="mod-database-mariadb-port">{i18next.t("admin.mod-database-mariadb-port")}</label>
            </div>
            <input type="number" min="0" max="65535" step="1" className="form-control" id="mod-database-mariadb-port" onChange={(e) => this.changeValue(e, "mariadb-port", true)} value={this.state.mod.parameters["mariadb-port"]} placeholder={i18next.t("admin.mod-database-mariadb-port-ph")} />
          </div>
        </div></div>;
      } else if (this.state.mod.parameters["connection-type"] === "postgre") {
        dbParams = <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="mod-database-postgre-conninfo">{i18next.t("admin.mod-database-postgre-conninfo")}</label>
            </div>
            <input type="text" className={this.state.errorList["postgre-conninfo"]?"form-control is-invalid":"form-control"} id="mod-database-postgre-conninfo" onChange={(e) => this.changeValue(e, "postgre-conninfo")} value={this.state.mod.parameters["postgre-conninfo"]} placeholder={i18next.t("admin.mod-database-postgre-conninfo-ph")} />
          </div>
          {this.state.errorList["postgre-conninfo"]?<span className="error-input">{this.state.errorList["postgre-conninfo"]}</span>:""}
        </div>;
      }
    }
    var dataFormat = [];
    var i = 0;
    this.state.mod.parameters["data-format"] && Object.keys(this.state.mod.parameters["data-format"]).map(property => {
      var convertLabel, convertDropdown;
      if (this.state.role === "client") {
        convertLabel = <label className="input-group-text" htmlFor={"dropdownFormatConvert-"+i}>{i18next.t("admin.mod-database-data-format-convert")}</label>
        convertDropdown = 
          <div>
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" id={"dropdownFormatConvert-"+i} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {i18next.t("admin.mod-database-data-format-convert-"+(this.state.mod.parameters["data-format"][property]["convert"]?this.state.mod.parameters["data-format"][property]["convert"]:"none"))}
            </button>
            <div className="dropdown-menu" aria-labelledby={"dropdownFormatConvert-"+i}>
              <a className="dropdown-item" href="#" onClick={(e) => this.changedataFormatConvert(e, property, false)}>{i18next.t("admin.mod-database-data-format-convert-none")}</a>
              <a className="dropdown-item" href="#" onClick={(e) => this.changedataFormatConvert(e, property, 'jwks')}>{i18next.t("admin.mod-database-data-format-convert-jwks")}</a>
            </div>
          </div>
      }
      var nameMultipleJsx = 
        <div>
          <div className="form-group">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor={"mod-database-data-format-name-"+property}>{i18next.t("admin.mod-database-data-format-property")}</label>
              </div>
              <input type="text" className={this.state.errorList["data-format"]?"form-control is-invalid":"form-control"} id={"mod-database-data-format-name-"+property} onChange={(e) => this.changeDataFormatProperty(e, property)} value={property} placeholder={i18next.t("admin.mod-database-data-format-property-ph")} />
              <div className="input-group-append">
                {convertLabel}
                {convertDropdown}
                <button type="button" className="btn btn-outline-secondary" onClick={(e) => this.deleteDataFormat(e, property)} title={i18next.t("admin.mod-data-format-delete")}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
            {this.state.errorList["data-format"]?<span className="error-input">{this.state.errorList["data-format"]}</span>:""}
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id={"mod-database-data-format-multiple-"+property} onChange={(e) => this.toggleDataFormatValue(e, property, "multiple")} checked={this.state.mod.parameters["data-format"][property]["multiple"]} />
            <label className="form-check-label" htmlFor={"mod-database-data-format-multiple-"+property}>{i18next.t("admin.mod-database-data-format-multiple")}</label>
          </div>
        </div>;
      if (this.state.role === "user") {
        dataFormat.push(
          <div key={i++}>
            {nameMultipleJsx}
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id={"mod-database-data-format-profile-read-"+property} onChange={(e) => this.toggleDataFormatValue(e, property, "profile-read")} checked={this.state.mod.parameters["data-format"][property]["profile-read"]} />
              <label className="form-check-label" htmlFor={"mod-database-data-format-profile-read-"+property}>{i18next.t("admin.mod-database-data-format-profile-read")}</label>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id={"mod-database-data-format-profile-write-"+property} onChange={(e) => this.toggleDataFormatValue(e, property, "profile-write")} checked={this.state.mod.parameters["data-format"][property]["profile-write"]} />
              <label className="form-check-label" htmlFor={"mod-database-data-format-profile-write-"+property}>{i18next.t("admin.mod-database-data-format-profile-write")}</label>
            </div>
            <hr/>
          </div>
        );
      } else if (this.state.role === "client") {
        dataFormat.push(
          <div key={i++}>
            {nameMultipleJsx}
            <hr/>
          </div>
        );
      }
    });
    var additionalProperties = <div className="accordion" id="accordionParams">
      <div className="card">
        <div className="card-header" id="dataFormatCard">
          <h2 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseDataFormat" aria-expanded="true" aria-controls="collapseDataFormat">
              {this.state.errorList["data-format"]?<span className="error-input btn-icon"><i className="fas fa-exclamation-circle"></i></span>:""}
              {i18next.t("admin.mod-data-format")}
            </button>
          </h2>
        </div>
        <div id="collapseDataFormat" className="collapse" aria-labelledby="dataFormatCard" data-parent="#accordionParams">
          <div className="card-body">
            <p>{i18next.t("admin.mod-data-format-message")}</p>
            <button type="button" className="btn btn-secondary" onClick={this.addDataFormat} title={i18next.t("admin.mod-data-format-add")}>
              <i className="fas fa-plus"></i>
            </button>
            <hr />
            {dataFormat}
            <button type="button" className="btn btn-secondary" onClick={this.addDataFormat} title={i18next.t("admin.mod-data-format-add")}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    if (this.state.role === "user") {
      return (
        <div>
          {pbkdf2Iterations}
          {useInternalConnection}
          {selectDbType}
          {dbParams}
          {additionalProperties}
        </div>
      );
    } else if (this.state.role === "client") {
      return (
        <div>
          {pbkdf2Iterations}
          {useInternalConnection}
          {selectDbType}
          {dbParams}
          {additionalProperties}
        </div>
      );
    } else {
      return ("");
    }
  }
}

export default DatabaseParams;
