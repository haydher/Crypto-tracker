const CryptoHeaderComp = ({ text, grid }) => {
 const headerStyle = {
  display: "flex",
  gridArea: `${grid}`,
  cursor: "pointer",
  padding: "20px 0",
  fontWeight: "500",
  fontSize: window.innerWidth <= 400 && "15px",
 };

 return (
  <div style={headerStyle}>
   <p style={{ marginRight: "5px" }}>{text}</p>
   {/* {sort != null && <img src="../imgs/sort.svg" alt="icon" />} */}
  </div>
 );
};

export default CryptoHeaderComp;
