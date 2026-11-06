/**
 * Runs before first paint. A saved choice wins; otherwise the site follows
 * the device's light/dark setting, with light as the fallback. Also marks
 * the document as scripted so reveals may animate (never hide) content.
 */
const script = `(function(){var d=document.documentElement;d.classList.add("js");var s=null;try{s=localStorage.getItem("lexoro-theme")}catch(e){}if(s==="light"||s==="dark"){d.setAttribute("data-theme",s);return}if(!window.matchMedia)return;var mq=window.matchMedia("(prefers-color-scheme: dark)");var a=function(){var t=null;try{t=localStorage.getItem("lexoro-theme")}catch(e){}if(t==="light"||t==="dark")return;d.setAttribute("data-theme",mq.matches?"dark":"light")};a();if(mq.addEventListener)mq.addEventListener("change",a)})()`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
