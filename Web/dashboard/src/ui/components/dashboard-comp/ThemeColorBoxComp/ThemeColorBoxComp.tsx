import React from "react";
import "./ThemeColorBoxComp.scss";
import { Icon } from "@iconify/react";
import magicWand from "@iconify-icons/simple-line-icons/magic-wand";
const ThemeColorBoxComp = () => {
  return (
    <>
      <div className="theme-color-box show">
        <div className="color-theme-row">
          <p className="theme-color-title">Light Theme</p>
          <div className="d-flex-space-between-row">
            <span className="theme-color-item bluenavy"></span>
            <span className="theme-color-item blueyale "></span>
            <span className="theme-color-item blueolympic "></span>
            <span className="theme-color-item greenmoss "></span>
            <span className="theme-color-item greenlime "></span>
          </div>
          <div className="d-flex-space-between-row">
            <span className="theme-color-item default active"></span>
            <span className="theme-color-item orangecarrot "></span>
            <span className="theme-color-item redruby "></span>
            <span className="theme-color-item yellowgranola "></span>
            <span className="theme-color-item greysteel "></span>
          </div>
        </div>
        <div className="color-theme-row">
          <p className="theme-color-title">Dark Theme</p>
          <div className="d-flex-space-between-row">
            <span className="theme-color-item bluenavy"></span>
            <span className="theme-color-item blueyale "></span>
            <span className="theme-color-item blueolympic "></span>
            <span className="theme-color-item greenmoss "></span>
            <span className="theme-color-item greenlime "></span>
          </div>
          <div className="d-flex-space-between-row">
            <span className="theme-color-item purplemonster "></span>
            <span className="theme-color-item orangecarrot "></span>
            <span className="theme-color-item redruby "></span>
            <span className="theme-color-item yellowgranola "></span>
            <span className="theme-color-item greysteel "></span>
          </div>
        </div>
        <div className="border-radius-toggle">
          <p className="border-radius-title">Border-radius</p>
          <div className="border-radius-row">
            <div className="border-radius-type">
              <input
                type="radio"
                id="border-radius-mode"
                name="border-radius"
                value="border-radius-mode"
              />
              <label htmlFor="border-radius-mode">Rounded</label>
            </div>
            <div className="border-radius-type">
              <input
                type="radio"
                id="flat-mode"
                name="border-radius"
                value="flat-mode"
              />
              <label htmlFor="flat-mode">Flat</label>
            </div>
          </div>
        </div>
        <button className="toggle-btn">
          <Icon icon={magicWand} />
        </button>
      </div>
    </>
  );
};

export default ThemeColorBoxComp;
