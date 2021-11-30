import { useTranslation } from "react-i18next";
import * as Icons from "../icons/icons";
import {
  EmailAndBioProps,
  IconWithLinkProps,
  OnlyIconProps,
  TextWithLinkProps,
  WidgetProps,
} from "./types";

const OnlyIcon = ({ iconName, alt }: OnlyIconProps) =>
  iconName ? <img src={Icons[iconName]} alt={alt} /> : null;

const IconWithLink = ({ iconName, alt, link }: IconWithLinkProps) => (
  <a href={link}>{iconName ? <img src={Icons[iconName]} alt={alt} /> : null}</a>
);

const TextWithLink = ({ text, link }: TextWithLinkProps) => (
  <div className="portfolioLink">
    <div className="dragMeText">drag me :)</div>
    <a href={link}>{text}</a>
  </div>
);

const Email = ({ text }: EmailAndBioProps) => (
  <div className="email">
    <a href={`mailto:${text}`}>{text}</a>
  </div>
);

const Bio = () => {
  const { t } = useTranslation();

  return <div className="bio">{t("bio")}</div>;
};

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  return (
    <div className="changeLanguage">
      <button
        style={{
          textDecoration: i18n.resolvedLanguage === "pl" ? "underline" : "none",
        }}
        onClick={() => i18n.changeLanguage("pl")}
      >
        PL
      </button>
      <button
        style={{
          textDecoration: i18n.resolvedLanguage === "en" ? "underline" : "none",
        }}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export const GetWidgets = ({
  widget: { type, text, link, iconName },
}: {
  widget: WidgetProps;
}) => {
  switch (type) {
    case "onlyIcon":
      return <OnlyIcon iconName={iconName} alt={text} />;
    case "iconWithLink":
      return <IconWithLink iconName={iconName} alt={text} link={link} />;
    case "email":
      return <Email text={text} />;
    case "textWithLink":
      return <TextWithLink text={text} link={link} />;
    case "changeLanguage":
      return <ChangeLanguage />;
    case "bio":
      return <Bio />;
    default:
      return <> :) </>;
  }
};
