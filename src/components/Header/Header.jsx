import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Pizza, sushi, tacos, pasta, and ice cream—each brings its own flavor
          to the table, from savory and spicy to creamy and sweet, making every
          bite a little adventure.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
