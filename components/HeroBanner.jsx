import React from "react";
import Image from "next/image";
import { CgShoppingCart } from "react-icons/cg";
import headerImg from "../src/assets/headerhome.png";
import featured1 from "../src/assets/Featured1.png";
import featured2 from "../src/assets/Featured2.png";
import featured3 from "../src/assets/Featured3.png";
import featured4 from "../src/assets/Featured4.png";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <header className="header">
      <div className="header-left-side">
        <div className="header-content">
          <span>Sale 70%</span>
          <h1>
            Wujudkan Impian di Langit dengan Layang-layang 
          </h1>
          <p>
          Siapa pun bisa mengalahkan Anda, tetapi tidak ada yang bisa mengalahkan layang-layang Anda selama Anda memakai tali premium.
          </p>
          <Link href="/products">
            <button className="btn" type="button">
              <CgShoppingCart size={26} /> Start Shopping
            </button>
          </Link>
        </div>

        <div className="header-featured">
          <Image src={featured1} width={100} height={35} alt="img" />
          <Image src={featured2} width={100} height={35} alt="img" />
          <Image src={featured3} width={100} height={35} alt="img" />
          <Image src={featured4} width={100} height={35} alt="img" />
        </div>
      </div>

      <div className="header-right-side">
        <div className="header-circle">
          <Image
            className="header-img"
            src={headerImg}
            width={650}
            height={650}
            alt="header image"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;
