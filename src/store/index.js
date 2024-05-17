import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#6ba4fa",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./w-logo.png",
  fullDecal: "./w-logo.png",
});

export default state;
