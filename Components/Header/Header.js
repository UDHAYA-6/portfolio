import classes from "./header.module.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../store/themeSlice";
const Header = () => {
  const dispatch = useDispatch();

  const darktheme = useSelector((state) => state.theme.themedark);
  const themeClicked = () => {
    dispatch(change());
  };

  return (
    <header className={classes.nav}>
      <div>
        <p>Name</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Media</a>
          </li>
          <li>
            <div>
              <a onClick={themeClicked}>
                <FaSun />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
