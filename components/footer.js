import Point from "./point";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch shadow-[0px_0px_20px_rgba(7,_64,_64,_0.05)] rounded-t-11xl rounded-b-none bg-darkcyan-200 flex flex-row items-start justify-between py-10 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 box-border gap-6 max-w-full text-left text-xs text-gray font-captions ${className}`}
    >
      <div className="w-[149px] flex flex-col items-start pt-[49px]">
        <div className="flex flex-col gap-3">
          <div className="font-light inline-block min-w-[28px]">AGB</div>
          <div className="font-light inline-block min-w-[69px]">Impressum</div>
          <div className="font-light inline-block min-w-[78px]">
            Datenschutz
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[25px] max-w-full text-base text-white">
        <div className="flex flex-row gap-6">
          <Point
            propBackgroundColor="#28e3e9"
            bestellprozess="Rezept einlösen"
            propColor="#fff"
          />
          <Point
            propBackgroundColor="#28e3e9"
            bestellprozess="Live Bestand"
            propColor="#fff"
          />
        </div>
        <div className="flex flex-row gap-6 flex-wrap">
          <Point
            propBackgroundColor="#28e3e9"
            bestellprozess="Videosprechstunde"
            propColor="#fff"
          />
          <Point
            propBackgroundColor="#28e3e9"
            bestellprozess="FAQs"
            propColor="#fff"
          />
          <Point bestellprozess="Kontakt" />
        </div>
      </div>
      <div className="w-[369px] flex flex-row items-start justify-between gap-6 flex-wrap">
        <div className="flex flex-col gap-3">
          <div className="font-light inline-block min-w-[56px]">Standort</div>
          <div className="text-base text-white">
            <p>Bergstraße 49 - 57</p>
            <p>69469 Weinheim</p>
            <p>(3 Glocken Quartier)</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-light inline-block min-w-[46px]">Telefon</div>
          <div className="text-base text-white">0223 545 5250</div>
        </div>
      </div>
      <img
        className="h-11 w-[107.7px] hidden"
        alt="Company Logo"
        src="/logo1.svg"
      />
      <div className="flex flex-col gap-3">
        <div className="font-light inline-block min-w-[95px]">
          Öffnungszeiten
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-light inline-block min-w-[37px]">Mo-Fr</div>
          <div className="text-base text-white">09:00 – 18:00 Uhr</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-light inline-block min-w-[16px]">Sa</div>
          <div className="text-base text-white">09:00 – 14:00 Uhr</div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
