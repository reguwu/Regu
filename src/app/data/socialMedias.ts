export const socialMedias: Array<{name: string, url: string}> = [
  {name: "linkedin", url: "https://linkedin.com/in/reg-yu-416057198"},
  {name: "github", url: "https://github.com/rgrs412"},
  {name: "discord", url: "https://discord.gg/dcdH99uyqh"},
  {name: "email", url: "mailto:regyu.dev@gmail.com"},
  {name: "resume", url: "/Reg_Yu_Resume.pdf"},
  {name: "", url: ""},
  {name: "", url: ""},
  {name: "", url: ""},
  {name: "", url: ""}
];

export function getUrlByName(name: string): string | undefined {
  const socialMedia = socialMedias.find((media: { name: string; }) => media.name === name);
  return socialMedia ? socialMedia.url : undefined;
}