import "./Headerr.css";
import { FaLocationArrow } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import DatePicker from "react-datepicker";
import {useState} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { BsFillCalendarDateFill } from "react-icons/bs";
const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="book-ticket">
      <h1 className="title">BOOK TICKET</h1>
      <form>
        <div className="form-group">
          <span className="side">
            <div className="icon">
              <FaLocationArrow className="header-icon" />
            </div>

            <label htmlFor="from" className="cen">
              From
            </label>
          </span>

          <input type="text" id="from" placeholder=" " />
        </div>
        <div className="form-group">
          <label htmlFor="date">DD/MM/YYYY *</label>
          <input type="date" id="date" defaultValue="2024-06-30" />
          {/* <BsFillCalendarDateFill className='header-icon' id="date" />
      <DatePicker 
      selected={startDate} onChange={(date) => setStartDate(date)} /> */}
       
        </div>
        <div className="form-group">
          <span className="side">
            <div className="icon">
              <FaMapMarker className="header-icon" />
            </div>

            <label htmlFor="to" className="cen">
              To
            </label>
          </span>

          <input type="text" id="to" placeholder=" " />
        </div>
        <div className="form-group">
          <span className="side">
            <div className="icon">
              <MdOutlineWork className="header-icon" />
            </div>

            <label htmlFor="class" className="cen">
              All Classes
            </label>
          </span>

          <select id="class">
            <option value="all-classes">Sleeper (S)</option>
            <option value="second class">AC 2 Tier (2A) </option>
            <option value="second class">First Class (F)</option>
          </select>
        </div>
        <button className="headerbtn">Search</button>
      </form>
    </div>
  );
};

export default Header;
