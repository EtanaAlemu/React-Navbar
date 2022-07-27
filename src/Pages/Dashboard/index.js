// import React from "react";
import "../../Assets/Styles/style.css";
import Header from "../../Layouts/Header";

const Card = (props) => {
  return (
    <div className="col-div-3">
      <div className="box">
        <p>
          {props.val}
          <br />
          <span>{props.name}</span>
        </p>
        <i className={props.cName}></i>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <div>
      <Card name="Customers" cName="fa fa-users box-icon" val="67" />
      <Card name="Projects" cName="fa fa-list box-icon" val="88" />
      <Card name="Orders" cName="fa fa-shopping-bag  box-icon" val="99" />
      <Card name="Tasks" cName="fa fa-tasks  box-icon" val="78" />
    </div>
  );
};

const Table = () => {
  return (
    <div className="col-div-8">
      <div className="box-8">
        <div className="content-box">
          <p>
            Top Selling Projects <span>Sell All</span>
          </p>
          <br />
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

const Scale = (props) => {
  return (
    <div className="col-div-4">
      <div className="box-4">
        <div className="content-box">
          <p>
            Total Sale <span>Sell All</span>
          </p>

          <div className="circle-wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill"></div>
              </div>
              <div className="mask half">
                <div className="fill"></div>
              </div>
              <div className="inside-circle"> {props.val} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <div id="main">
        <Header name={"Dashboard"} />
        <div className="clearfix"></div>
        <br />
        <Category />
        <div className="clearfix"></div>
        <br />
        <br />
        <Table />
        <Scale val="75%" />
        <div class="clearfix"></div>
      </div>
    </div>
  );
};

export default Dashboard;
