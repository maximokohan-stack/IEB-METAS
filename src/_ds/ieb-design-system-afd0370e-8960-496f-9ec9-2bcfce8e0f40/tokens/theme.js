/* IEB+ theme mode: applies data-theme on <html> and persists the user's pick.
   Light is the default — call this before paint (a plain <script src> in <head>,
   right after the styles.css link) to avoid a flash of the wrong theme. */
(function(){
  var KEY="ieb-theme";
  function read(){try{return localStorage.getItem(KEY);}catch(e){return null;}}
  function write(t){try{localStorage.setItem(KEY,t);}catch(e){}}
  function apply(t){document.documentElement.setAttribute("data-theme",t);}
  function get(){return read()==="dark"?"dark":"light";}
  function set(t){t=t==="dark"?"dark":"light";write(t);apply(t);document.dispatchEvent(new CustomEvent("iebthemechange",{detail:{theme:t}}));}
  function toggle(){set(get()==="dark"?"light":"dark");}
  apply(get());
  window.IEBTheme={get:get,set:set,toggle:toggle};
})();
