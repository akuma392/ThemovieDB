import React from "react";

const Hero = () => {
  return (
    <>
      <div class="main">
        <div class="area">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>

          <div class="search">
            <input type="text" class="box" placeholder="Email" />
            <span class="try">
              Try 30 days free <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <h4>
            Ready to watch? Enter your email to create or access your account
          </h4>
        </div>
      </div>
    </>
  );
};

export default Hero;
