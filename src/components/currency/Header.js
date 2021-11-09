import { HeaderStyle, Date } from "../styles/Header.style";
//redux
import { useSelector, useDispatch } from "react-redux";
import { changeTime } from "../../redux/changeGraphTime.redux";

const Header = ({ coin }) => {
 // redux toolkit
 // get the currency state
 const { time } = useSelector((state) => state.changeTime);
 // get the changeCurrency function from redux
 const dispatch = useDispatch();
 // example on how to use it
 // <button onClick={() => dispatch(changeCurrency("PKR"))}>Click</button>

 return (
  <HeaderStyle>
   <div className="name">
    <img src={coin.image.large} alt="coin thumbnail" />
    <p>{coin.name}</p>
    <p className="rank">rank #{coin.coingecko_rank}</p>
   </div>
   <div className="chartDates">
    <Date active={time === 3600 && "active"} onClick={() => dispatch(changeTime(3600))}>
     1H
    </Date>
    <Date active={time === 86400 && "active"} onClick={() => dispatch(changeTime(86400))}>
     24H
    </Date>
    <Date active={time === 604800 && "active"} onClick={() => dispatch(changeTime(604800))}>
     7D
    </Date>
    <Date active={time === 1209600 && "active"} onClick={() => dispatch(changeTime(1209600))}>
     14D
    </Date>
    <Date active={time === 2592000 && "active"} onClick={() => dispatch(changeTime(2592000))}>
     1M
    </Date>
    <Date active={time === 7890000 && "active"} onClick={() => dispatch(changeTime(7890000))}>
     3M
    </Date>
    <Date active={time === 15780000 && "active"} onClick={() => dispatch(changeTime(15780000))}>
     6M
    </Date>
    <Date active={time === 31560000 && "active"} onClick={() => dispatch(changeTime(31560000))}>
     1Y
    </Date>
    <Date active={time === 473040000 && "active"} onClick={() => dispatch(changeTime(473040000))}>
     Max
    </Date>
   </div>
  </HeaderStyle>
 );
};

export default Header;
