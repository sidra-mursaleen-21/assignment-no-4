import icon_1 from "./assets/img/about-icon-1.png";
import icon_2 from "./assets/img/about-icon-2.png";
import icon_3 from "./assets/img/about-icon-3.png";
import image_1 from "./assets/img/bg-showcase-1.jpg";
import image_2 from "./assets/img/bg-showcase-2.jpg";
import image_3 from "./assets/img/bg-showcase-3.jpg";
import review_image_1 from "./assets/img/testimonials-1.jpg";
import review_image_2 from "./assets/img/testimonials-2.jpg";
import review_image_3 from "./assets/img/testimonials-3.jpg";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>logo</h1>
        <button>sign up</button>
      </nav>
      <div className="header">
        <h1>generate more leads with a professional landing page!</h1>
        <div>
          <input placeholder="email address" type="email" />
          <button>submit</button>
        </div>
      </div>
    </header>
  );
};

const About = () => {
  return (
    <main>
      <div className="about">
        <div className="box">
          <img src={icon_1} alt="icon" />
          <h2>fully responsive</h2>
          <p>This theme will look graet on any device.No matter the size!</p>
        </div>
        <div className="box">
          <img src={icon_2} alt="icon" />
          <h2>bootstrap 5 ready</h2>
          <p>featuring the latest build of the new bootstrap 5 framework!</p>
        </div>
        <div className="box">
          <img src={icon_3} alt="icon" />
          <h2>easy to use</h2>
          <p>
            ready to use with your own content, or customize the source files!
          </p>
        </div>
      </div>
      <div className="about_content">
        <div>
          <h1>fully responsive design</h1>
          <p>
            When you use a theme created by start bootstrap.You know that the
            theme will look graet on any device.weather it's a phone ,tablet,or
            desktopthe page will behave responsively!
          </p>
        </div>
        <img width={"100%"} height={"100%"} src={image_1} alt="" />
        <img width={"100%"} height={"100%"} src={image_2} alt="" />
        <div>
          <h1>updated for bootstrap 5</h1>
          <p>
            Newly approved,and full of greate utility classes,bootstrap 5 is
            leading the way in mobile responsive web development!All of the
            themes on start bootstrap are now using bootstrap 5!
          </p>
        </div>
        <div>
          <h1>easy to use & customize</h1>
          <p>
            Landing page is just HTML and CSS with a splash of SCSS for users
            who demand some deeper customization options.Out of the box,just add
            your content and images,and your new landing page will be ready to
            go!
          </p>
        </div>
        <img width={"100%"} height={"100%"} src={image_3} alt="" />
      </div>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="reveiws">
        <h2>what people are saying...</h2>
        <div className="review_container">
          <div className="review_box">
            <img
              width={"200px"}
              height={"200px"}
              src={review_image_1}
              alt="review"
            />
            <h3>margaret E.</h3>
            <p>"This is fantastic! Thanks so much guys!"</p>
          </div>
          <div className="review_box">
            <img
              width={"200px"}
              height={"200px"}
              src={review_image_2}
              alt="review"
            />
            <h3>fred S.</h3>
            <p>
              "Bootstrap is amaizing.i have been using it to create lots of
              super nice landing pages."
            </p>
          </div>
          <div className="review_box">
            <img
              width={"200px"}
              height={"200px"}
              src={review_image_3}
              alt="review"
            />
            <h3>sarah w.</h3>
            <p>
              "Thank so much for making these free resources available to us"
            </p>
          </div>
        </div>
      </div>
      <div className="sign_up">
        <h2>ready to get started?Sign up now!</h2>
        <div>
          <input placeholder="email address" type="email" />
          <button>submit</button>
        </div>
      </div>
      <div className="footer">
        <div>
          <div className="link">
            <a href="">about</a>
            <a href="">contact</a>
            <a href="">term of use</a>
            <a href="">privacy policy</a>
          </div>
          <p>Your website 2023.all right reserved.</p>
        </div>
        <div className="icon">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export { Header, About, Footer };
