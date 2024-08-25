import HeaderDesktop from "./header-desktop";
import Breadcrumbs from "./breadcrumbs";
import H from "./h";
import Button1 from "./button1";
import Switch from "./switch";
import FilterNames from "./filter-names";
import CheckboxLine from "./checkbox-line";
import Checkbox from "./checkbox";
import CheckboxTag from "./checkbox-tag";
import FrameComponent from "./frame-component";
import Pagination from "./pagination";
import PropTypes from "prop-types";

const InnerDesktop = ({ className = "" }) => {
  return (
    <section
      className={`w-[1304px] flex flex-col items-start justify-start gap-[90px] max-w-full text-left text-base text-primary font-captions mq900:gap-[45px] mq450:gap-[22px] ${className}`}
    >
      <HeaderDesktop />
      <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mq900:gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-5 max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-20 box-border gap-20 min-w-[315px] max-w-full mq900:gap-10 mq900:pr-10 mq900:box-border">
            <Breadcrumbs />
            <H />
          </div>
          <div className="w-[340px] flex flex-col items-start justify-start pt-[108px] px-0 pb-0 box-border max-w-full font-sf-pro-display">
            <div className="self-stretch rounded-11xl bg-mid-gray-transparent-10 flex flex-row items-start justify-between pt-1.5 px-4 pb-2 gap-5">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative inline-block min-w-[52px]">Suchen</div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/iconsearch.svg"
              />
            </div>
          </div>
          <div className="w-[438px] flex flex-col items-end justify-start gap-[45px] max-w-full text-center text-sm text-secondary-text mq450:gap-[22px]">
            <div className="w-[227px] flex flex-row items-start justify-end py-0 px-0.5 box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-3">
                <div className="self-stretch relative tracking-[0.01em]">
                  GKV mit Kostenübernahme?
                </div>
                <Button1
                  propBorder="2px solid #62c3c6"
                  bestellprozess="Preisoptionen"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-5 text-left text-base mq450:flex-wrap">
              <div className="flex-1 rounded bg-secondary-30 flex flex-row items-start justify-start py-[7px] px-3 box-border gap-[9px] min-w-[112px]">
                <div className="relative tracking-[0.01em] font-semibold inline-block min-w-[124px]">
                  Sortieren nach
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/iconarrow-down.svg"
                  />
                </div>
              </div>
              <div className="flex-1 rounded bg-secondary-30 flex flex-row items-start justify-start py-[7px] px-3 box-border gap-2.5 min-w-[115px]">
                <div className="relative tracking-[0.01em] font-semibold inline-block min-w-[116px]">
                  Verfügbarkeit
                </div>
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                  <Switch />
                </div>
              </div>
              <div className="h-[34px] rounded bg-secondary-30 flex flex-row items-center justify-center py-0.5 px-3 box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/iconlistview.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-20 max-w-full text-5xl text-black2 mq900:gap-10 mq450:gap-5">
          <div className="w-[250px] flex flex-col items-start justify-start gap-11 mq900:hidden mq450:gap-[22px]">
            <div className="self-stretch rounded bg-secondary-10 flex flex-row items-start justify-center py-0.5 px-5">
              <h3 className="m-0 relative text-inherit tracking-[0.01em] font-semibold font-[inherit] inline-block min-w-[65px] mq450:text-lgi">
                Filter
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-10 text-center text-lg text-secondary-text mq450:gap-5">
              <FilterNames preis="Preis" prop="5 €" prop1="10 €" />
              <div className="self-stretch border-secondary-30 border-b-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-7 gap-5">
                <div className="self-stretch flex flex-col items-start justify-start gap-5">
                  <div className="self-stretch flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                    <div className="w-[234px] flex flex-col items-start justify-start">
                      <div className="self-stretch relative font-semibold">
                        Hersteller
                      </div>
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/iconarrow-down-1.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-4 text-left text-base">
                    <CheckboxLine aDREXpharma="ADREXpharma" />
                    <CheckboxLine aDREXpharma="Aurora" />
                    <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                      <Checkbox />
                      <div className="flex-1 relative">Avaay</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                      <Checkbox />
                      <div className="flex-1 relative">Bedrocan</div>
                    </div>
                    <CheckboxLine aDREXpharma="Cannamedical" />
                  </div>
                </div>
                <Button1 bestellprozess="mehr anzeigen" />
              </div>
              <FilterNames
                preis="THC Gehalt"
                prop="11%"
                propMinWidth="28px"
                prop1="18%"
                propMinWidth1="31px"
              />
              <FilterNames
                preis="CBD Gehalt"
                prop="1%"
                propMinWidth="21px"
                prop1="5%"
                propMinWidth1="24px"
              />
              <div className="self-stretch border-secondary-30 border-b-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-7 gap-5">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative font-semibold">
                    Genetik
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-1 text-left text-base text-black2">
                  <div className="flex-1 rounded bg-primary flex flex-row items-center justify-center py-1 px-3.5 text-background">
                    <div className="relative inline-block min-w-[51px]">
                      Indica
                    </div>
                  </div>
                  <div className="flex-1 rounded bg-secondary-30 flex flex-row items-center justify-center py-1 px-3.5">
                    <div className="relative inline-block min-w-[51px]">
                      Sativa
                    </div>
                  </div>
                  <div className="rounded bg-secondary-30 flex flex-row items-center justify-center py-1 px-3">
                    <div className="relative inline-block min-w-[56px]">
                      Hybrid
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch border-secondary-30 border-b-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-7 gap-5">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative font-semibold">
                    Bestrahltung
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-1 text-left text-base text-black2">
                  <CheckboxTag
                    propFlex="unset"
                    tHC24="bestrahlt"
                    propMinWidth="74px"
                  />
                  <div className="rounded bg-secondary-30 flex flex-row items-center justify-center py-1 px-2.5 whitespace-nowrap">
                    <div className="relative inline-block min-w-[120px]">
                      nicht bestrahlt
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch border-secondary-30 border-b-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-7">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                    <div className="w-[234px] flex flex-col items-start justify-start">
                      <div className="self-stretch relative font-semibold">
                        Terpene
                      </div>
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/iconarrow-down-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] text-left text-base text-black1">
                <div className="flex-1 flex flex-row items-start justify-start gap-1">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-3 h-3 relative overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/iconclose@2x.png"
                    />
                  </div>
                  <div className="relative">alle Filter zurücksetzen</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-10 max-w-[calc(100%_-_330px)] text-xs text-red mq900:gap-5 mq900:max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-1 box-border max-w-full">
              <div className="w-[970px] flex flex-row items-start justify-start flex-wrap content-start gap-x-5 gap-y-[18px] min-h-[1702px] max-w-full">
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  availability={false}
                  propAlignSelf="stretch"
                  propWidth="50px"
                  sofortLieferbar={false}
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/img@2x.png"
                  propBorder1="2px solid #28e3e9"
                  tHC24="THC 18% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  nichtLieferbar="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth3="56px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  availability={false}
                  propAlignSelf="stretch"
                  propWidth="50px"
                  sofortLieferbar={false}
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/img@2x.png"
                  propBorder1="2px solid #28e3e9"
                  tHC24="THC 18% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  nichtLieferbar="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth3="56px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  availability={false}
                  propAlignSelf="stretch"
                  propWidth="50px"
                  sofortLieferbar={false}
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/img@2x.png"
                  propBorder1="2px solid #28e3e9"
                  tHC24="THC 18% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  nichtLieferbar="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth3="56px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="unset"
                  propBoxShadow="0px 0px 20px rgba(7, 64, 64, 0.05)"
                  propGap="20px"
                  availability
                  propAlignSelf="unset"
                  propWidth="unset"
                  sofortLieferbar
                  propAlignSelf1="unset"
                  propWidth1="unset"
                  propMinWidth1="26px"
                  img="/img@2x.png"
                  propBorder1="unset"
                  tHC24="THC 25% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
                  nichtLieferbar="sofort lieferbar"
                  propBackgroundColor="rgba(13, 112, 82, 0.05)"
                  propBackgroundColor1="#0d7052"
                  propColor="#0d7052"
                  propMinWidth="93px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Pink Kush"
                  indica1="Hybrid"
                  propMinWidth3="78px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="unset"
                  propBoxShadow="0px 0px 20px rgba(7, 64, 64, 0.05)"
                  propGap="20px"
                  availability
                  propAlignSelf="unset"
                  propWidth="unset"
                  sofortLieferbar
                  propAlignSelf1="unset"
                  propWidth1="unset"
                  propMinWidth1="26px"
                  img="/img@2x.png"
                  propBorder1="unset"
                  tHC24="THC 25% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
                  nichtLieferbar="sofort lieferbar"
                  propBackgroundColor="rgba(13, 112, 82, 0.05)"
                  propBackgroundColor1="#0d7052"
                  propColor="#0d7052"
                  propMinWidth="93px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Pink Kush"
                  indica1="Hybrid"
                  propMinWidth3="78px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="unset"
                  propBoxShadow="0px 0px 20px rgba(7, 64, 64, 0.05)"
                  propGap="20px"
                  availability
                  propAlignSelf="unset"
                  propWidth="unset"
                  sofortLieferbar
                  propAlignSelf1="unset"
                  propWidth1="unset"
                  propMinWidth1="26px"
                  img="/img@2x.png"
                  propBorder1="unset"
                  tHC24="THC 25% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
                  nichtLieferbar="sofort lieferbar"
                  propBackgroundColor="rgba(13, 112, 82, 0.05)"
                  propBackgroundColor1="#0d7052"
                  propColor="#0d7052"
                  propMinWidth="93px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Pink Kush"
                  indica1="Hybrid"
                  propMinWidth3="78px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  availability={false}
                  propAlignSelf="stretch"
                  propWidth="50px"
                  sofortLieferbar={false}
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/img@2x.png"
                  propBorder1="2px solid #28e3e9"
                  tHC24="THC 18% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  nichtLieferbar="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth3="56px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  availability={false}
                  propAlignSelf="stretch"
                  propWidth="50px"
                  sofortLieferbar={false}
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/img@2x.png"
                  propBorder1="2px solid #28e3e9"
                  tHC24="THC 18% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  nichtLieferbar="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC241={`CBD <1%`}
                  propFlex="1"
                  propMinWidth2="70px"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth3="56px"
                  propMinWidth4="56px"
                />
                <FrameComponent
                  availability
                  sofortLieferbar
                  img="/img@2x.png"
                  tHC24="THC 18% "
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  nichtLieferbar="nicht lieferbar"
                  tHC241={`CBD <1%`}
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth3="56px"
                />
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

InnerDesktop.propTypes = {
  className: PropTypes.string,
};

export default InnerDesktop;
