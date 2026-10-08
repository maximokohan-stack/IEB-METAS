/* @ds-bundle: {"format":4,"namespace":"IEBDesignSystem_afd037","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Note","sourcePath":"components/feedback/Note.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Sheet","sourcePath":"components/feedback/Sheet.jsx"},{"name":"AmountInput","sourcePath":"components/forms/AmountInput.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"IEB_GOALS","sourcePath":"components/metas/GoalCard.jsx"},{"name":"GoalCard","sourcePath":"components/metas/GoalCard.jsx"},{"name":"GoalProgress","sourcePath":"components/metas/GoalProgress.jsx"},{"name":"ListRow","sourcePath":"components/metas/ListRow.jsx"},{"name":"RecommendationCard","sourcePath":"components/metas/RecommendationCard.jsx"},{"name":"IEB_RISK_LEVELS","sourcePath":"components/metas/RiskSelector.jsx"},{"name":"RiskSelector","sourcePath":"components/metas/RiskSelector.jsx"},{"name":"IEB_NAV_ITEMS","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"610b4764c8b4","components/core/Button.jsx":"9387f0406d0f","components/core/Card.jsx":"1f2ed41f59d1","components/core/Icon.jsx":"3bb668074492","components/core/IconButton.jsx":"ebaed8ab8703","components/core/Tag.jsx":"3634a5817f41","components/feedback/Note.jsx":"b3a388914fdf","components/feedback/ProgressBar.jsx":"6ea7a5c4444b","components/feedback/Sheet.jsx":"44eb9fc728ee","components/forms/AmountInput.jsx":"17880d631919","components/forms/Checkbox.jsx":"360b9fc46134","components/forms/Input.jsx":"962f2c5f3df2","components/forms/Radio.jsx":"abcac72c2597","components/forms/Select.jsx":"264e963efb67","components/forms/Switch.jsx":"0611c9e2edcc","components/metas/GoalCard.jsx":"012af3ebfdfb","components/metas/GoalProgress.jsx":"c514716e89af","components/metas/ListRow.jsx":"c26a1b935c5e","components/metas/RecommendationCard.jsx":"d85e88af57d4","components/metas/RiskSelector.jsx":"267cfe79fe92","components/navigation/BottomNav.jsx":"7f1470c19f53","components/navigation/Stepper.jsx":"c02863319ef0","components/navigation/TopBar.jsx":"b38111475cf6","tokens/theme.js":"fde2b39b4cd3","ui_kits/mis_metas_app/App.jsx":"09fe2170f425","ui_kits/mis_metas_app/HomeScreen.jsx":"2be250fd60d6","ui_kits/mis_metas_app/MercadoScreen.jsx":"5cfc3b1c7322","ui_kits/mis_metas_app/MetaDetalleScreen.jsx":"03763b314eb9","ui_kits/mis_metas_app/MetasScreen.jsx":"e8babb277d68","ui_kits/mis_metas_app/NuevaMetaFlow.jsx":"b6ba03e0ac42","ui_kits/mis_metas_app/PerfilScreen.jsx":"6a1b4d06cedd","ui_kits/mis_metas_app/ResearchScreen.jsx":"3d704837eb5e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IEBDesignSystem_afd037 = window.IEBDesignSystem_afd037 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  variant = "default",
  selected = false,
  interactive = false,
  as = "div",
  onClick,
  className = "",
  style
}) {
  const Tag = as;
  const cls = ["ieb-card", variant !== "default" ? "is-" + variant : "", selected ? "is-selected" : "", interactive ? "is-interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, {
    className: cls,
    onClick: onClick,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const CDN = "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/";
function Icon({
  name,
  size = 20,
  color,
  style,
  className = ""
}) {
  const url = CDN + name + ".svg";
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: ("ieb-icon " + className).trim(),
    style: {
      width: size,
      height: size,
      color: color,
      WebkitMaskImage: "url(" + url + ")",
      maskImage: "url(" + url + ")",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "brand",
  icon,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ["ieb-badge", "is-" + tone, className].filter(Boolean).join(" "),
    style: style
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = "primary",
  size = "lg",
  block = false,
  icon,
  iconAfter,
  disabled = false,
  type = "button",
  onClick,
  className = "",
  style
}) {
  const cls = ["ieb-btn", "is-" + variant, "is-" + size, block ? "is-block" : "", className].filter(Boolean).join(" ");
  const glyph = size === "sm" ? 16 : 20;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    className: cls,
    disabled: disabled,
    onClick: onClick,
    style: style
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: glyph
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: glyph
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = "plain",
  size = 20,
  onClick,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    className: ["ieb-iconbtn", "is-" + variant, className].filter(Boolean).join(" "),
    onClick: onClick,
    style: style
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  icon,
  onClick,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": selected,
    className: ["ieb-tag", selected ? "is-selected" : "", className].filter(Boolean).join(" "),
    onClick: onClick,
    style: style
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Note.jsx
try { (() => {
function Note({
  children,
  tone = "brand",
  icon = "info",
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["ieb-note", tone !== "brand" ? "is-" + tone : "", className].filter(Boolean).join(" "),
    style: style
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-note-icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Note });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Note.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  tone = "brand",
  onBrand = false,
  className = "",
  style
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    className: ["ieb-progress-track", onBrand ? "on-brand" : "", className].filter(Boolean).join(" "),
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ieb-progress-fill" + (tone === "warm" ? " is-warm" : ""),
    style: {
      width: pct + "%"
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Sheet.jsx
try { (() => {
function Sheet({
  open = false,
  title,
  children,
  footer,
  onClose,
  className = "",
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ieb-sheet-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: ["ieb-sheet", className].filter(Boolean).join(" "),
    onClick: e => e.stopPropagation(),
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-sheet-handle"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h2)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Cerrar",
    variant: "neutral",
    onClick: onClose
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/forms/AmountInput.jsx
try { (() => {
function AmountInput({
  label,
  value,
  onChange,
  currency = "$",
  help,
  presets = [],
  onPreset,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["ieb-field", className].filter(Boolean).join(" "),
    style: style
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-label"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: "ieb-amount"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-amount-currency"
  }, currency), /*#__PURE__*/React.createElement("input", {
    className: "ieb-amount-input",
    inputMode: "numeric",
    value: value,
    onChange: onChange,
    placeholder: "0"
  })), presets.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, presets.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.label,
    type: "button",
    className: "ieb-tag" + (String(value) === String(p.value) ? " is-selected" : ""),
    onClick: () => onPreset && onPreset(p)
  }, p.label))) : null, help ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-help"
  }, help) : null);
}
Object.assign(__ds_scope, { AmountInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/AmountInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  help,
  disabled = false,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["ieb-choice", checked ? "is-checked" : "", className].filter(Boolean).join(" "),
    style: style
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "ieb-box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-semibold)"
    }
  }, label), help ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-help",
    style: {
      display: "block"
    }
  }, help) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  value,
  onChange,
  placeholder,
  help,
  error,
  prefix,
  suffix,
  icon,
  type = "text",
  disabled = false,
  numeric = false,
  id,
  className = "",
  style
}) {
  const wrap = ["ieb-input-wrap", error ? "is-error" : "", disabled ? "is-disabled" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: ["ieb-field", className].filter(Boolean).join(" "),
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ieb-label",
    htmlFor: id
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: wrap
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "var(--text-brand)"
  }) : null, prefix ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-input-prefix"
  }, prefix) : null, /*#__PURE__*/React.createElement("input", {
    id: id,
    className: "ieb-input",
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    style: numeric ? {
      fontVariantNumeric: "tabular-nums"
    } : undefined
  }), suffix ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-input-suffix"
  }, suffix) : null), error ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-help is-error"
  }, error) : help ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-help"
  }, help) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  help,
  name,
  disabled = false,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["ieb-choice", checked ? "is-checked" : "", className].filter(Boolean).join(" "),
    style: style
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "ieb-dot"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-semibold)"
    }
  }, label), help ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-help",
    style: {
      display: "block"
    }
  }, help) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  onChange,
  options = [],
  help,
  id,
  disabled = false,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["ieb-field", className].filter(Boolean).join(" "),
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ieb-label",
    htmlFor: id
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    className: "ieb-select-wrap"
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    className: "ieb-select",
    value: value,
    onChange: onChange,
    disabled: disabled
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "ieb-select-chevron"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 20
  }))), help ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-help"
  }, help) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  help,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["ieb-choice", className].filter(Boolean).join(" "),
    style: {
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-semibold)"
    }
  }, label), help ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-help",
    style: {
      display: "block"
    }
  }, help) : null), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "ieb-switch" + (checked ? " is-on" : "")
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/metas/GoalCard.jsx
try { (() => {
const IEB_GOALS = [{
  id: "viaje",
  label: "Viaje",
  icon: "plane",
  hint: "Vacaciones o intercambio"
}, {
  id: "auto",
  label: "Auto",
  icon: "car",
  hint: "Tu primer vehiculo"
}, {
  id: "emergencia",
  label: "Emergencia",
  icon: "umbrella",
  hint: "Un colchon para imprevistos"
}, {
  id: "vivienda",
  label: "Vivienda",
  icon: "house",
  hint: "Alquiler o entrada"
}, {
  id: "estudio",
  label: "Estudio",
  icon: "graduation-cap",
  hint: "Cursos o posgrado"
}, {
  id: "otro",
  label: "Otro",
  icon: "sparkles",
  hint: "Vos le pones el nombre"
}];
function GoalCard({
  label,
  icon = "sparkles",
  hint,
  selected = false,
  onClick,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": selected,
    className: ["ieb-goalcard", selected ? "is-selected" : "", className].filter(Boolean).join(" "),
    onClick: onClick,
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-goalcard-icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-goalcard-label"
  }, label), hint ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-goalcard-hint"
  }, hint) : null));
}
Object.assign(__ds_scope, { IEB_GOALS, GoalCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/metas/GoalCard.jsx", error: String((e && e.message) || e) }); }

// components/metas/GoalProgress.jsx
try { (() => {
function GoalProgress({
  percent = 0,
  saved,
  missing,
  targetDate,
  monthly,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-gp-pct"
  }, percent, "%"), /*#__PURE__*/React.createElement("span", {
    className: "ieb-help"
  }, "de tu meta")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--space-3) 0 var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: percent
  })), /*#__PURE__*/React.createElement("div", {
    className: "ieb-gp-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ieb-gp-cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-gp-cell-label"
  }, "Ya juntaste"), /*#__PURE__*/React.createElement("span", {
    className: "ieb-gp-cell-value"
  }, saved)), /*#__PURE__*/React.createElement("div", {
    className: "ieb-gp-cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-gp-cell-label"
  }, "Te falta"), /*#__PURE__*/React.createElement("span", {
    className: "ieb-gp-cell-value"
  }, missing)), /*#__PURE__*/React.createElement("div", {
    className: "ieb-gp-cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-gp-cell-label"
  }, "Fecha estimada"), /*#__PURE__*/React.createElement("span", {
    className: "ieb-gp-cell-value"
  }, targetDate)), /*#__PURE__*/React.createElement("div", {
    className: "ieb-gp-cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-gp-cell-label"
  }, "Aporte mensual"), /*#__PURE__*/React.createElement("span", {
    className: "ieb-gp-cell-value"
  }, monthly))));
}
Object.assign(__ds_scope, { GoalProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/metas/GoalProgress.jsx", error: String((e && e.message) || e) }); }

// components/metas/ListRow.jsx
try { (() => {
function ListRow({
  title,
  subtitle,
  icon,
  value,
  valueSub,
  chevron = true,
  onClick,
  className = "",
  style
}) {
  const Tag = onClick ? "button" : "div";
  return /*#__PURE__*/React.createElement(Tag, {
    type: onClick ? "button" : undefined,
    className: ["ieb-row", className].filter(Boolean).join(" "),
    onClick: onClick,
    style: style
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-media"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-title"
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-sub"
  }, subtitle) : null), value ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-value"
  }, value, valueSub ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-sub",
    style: {
      display: "block",
      fontWeight: 400
    }
  }, valueSub) : null) : null, chevron && onClick ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-brand)",
      marginLeft: value ? "var(--space-2)" : "auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20
  })) : null);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/metas/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/metas/RecommendationCard.jsx
try { (() => {
function RecommendationCard({
  title = "Recomendado IEB+",
  instrument,
  reason,
  stats = [],
  riskLabel,
  onPrimary,
  primaryLabel = "Elegir esta opción",
  onWhy,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: ["ieb-rec", className].filter(Boolean).join(" "),
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-rec-eyebrow"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 14
  }), title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ieb-rec-title"
  }, instrument), riskLabel ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "on-brand"
  }, riskLabel) : null), reason ? /*#__PURE__*/React.createElement("p", {
    className: "ieb-rec-body",
    style: {
      marginTop: "var(--space-2)"
    }
  }, reason) : null, stats.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginTop: "var(--space-4)"
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    className: "ieb-rec-stat",
    key: s.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-rec-stat-label"
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "ieb-rec-stat-value"
  }, s.value)))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ieb-btn is-md is-block",
    onClick: onPrimary,
    style: {
      background: "var(--white)",
      color: "var(--brand-primary)"
    }
  }, primaryLabel), onWhy ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ieb-btn is-md",
    onClick: onWhy,
    style: {
      background: "rgba(255,255,255,0.16)",
      color: "var(--white)"
    }
  }, "Por que") : null));
}
Object.assign(__ds_scope, { RecommendationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/metas/RecommendationCard.jsx", error: String((e && e.message) || e) }); }

// components/metas/RiskSelector.jsx
try { (() => {
const IEB_RISK_LEVELS = [{
  id: "conservador",
  label: "Conservador",
  level: 1,
  icon: "shield-check",
  desc: "Priorizamos que tu plata no baje. Crece despacio y parejo."
}, {
  id: "intermedio",
  label: "Intermedio",
  level: 2,
  icon: "scale",
  desc: "Un poco de movimiento a cambio de más rendimiento esperado."
}, {
  id: "arriesgado",
  label: "Arriesgado",
  level: 3,
  icon: "rocket",
  desc: "Puede subir y bajar fuerte. Solo si podés esperar varios años."
}];
function RiskSelector({
  levels = IEB_RISK_LEVELS,
  value,
  onChange,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["ieb-risk", className].filter(Boolean).join(" "),
    style: style
  }, levels.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    type: "button",
    "aria-pressed": value === l.id,
    className: "ieb-risk-option" + (value === l.id ? " is-selected" : ""),
    onClick: () => onChange && onChange(l.id)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-brand)",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: l.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-risk-title"
  }, l.label), /*#__PURE__*/React.createElement("span", {
    className: "ieb-risk-desc"
  }, l.desc), /*#__PURE__*/React.createElement("span", {
    className: "ieb-risk-meter"
  }, [1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ieb-risk-bar" + (i <= l.level ? " is-on" : "")
  })))))));
}
Object.assign(__ds_scope, { IEB_RISK_LEVELS, RiskSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/metas/RiskSelector.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
const IEB_NAV_ITEMS = [{
  id: "inicio",
  label: "Inicio",
  icon: "house"
}, {
  id: "metas",
  label: "Metas",
  icon: "target"
}, {
  id: "mercado",
  label: "Mercado",
  icon: "trending-up"
}, {
  id: "research",
  label: "Research",
  icon: "book-open"
}, {
  id: "perfil",
  label: "Perfil",
  icon: "user"
}];
function BottomNav({
  items = IEB_NAV_ITEMS,
  active = "inicio",
  onSelect,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: ["ieb-bottomnav", className].filter(Boolean).join(" "),
    style: style
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    type: "button",
    className: "ieb-navitem" + (it.id === active ? " is-active" : ""),
    onClick: () => onSelect && onSelect(it.id)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 22
  }), it.label)));
}
Object.assign(__ds_scope, { IEB_NAV_ITEMS, BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function Stepper({
  step = 1,
  total = 4,
  showLabel = true,
  className = "",
  style
}) {
  const segs = [];
  for (let i = 1; i <= total; i++) {
    segs.push(/*#__PURE__*/React.createElement("span", {
      key: i,
      className: "ieb-stepper-seg" + (i < step ? " is-done" : i === step ? " is-current" : "")
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: ["ieb-stepper", className].filter(Boolean).join(" "),
    style: style
  }, segs, showLabel ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-stepper-label"
  }, step, "/", total) : null);
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function TopBar({
  title,
  onBack,
  action,
  eyebrow,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: ["ieb-topbar", className].filter(Boolean).join(" "),
    style: style
  }, onBack ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-left",
    label: "Volver",
    onClick: onBack
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "ieb-help"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("span", {
    className: "ieb-topbar-title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-1)"
    }
  }, action));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// tokens/theme.js
try { (() => {
/* IEB+ theme mode: applies data-theme on <html> and persists the user's pick.
   Light is the default — call this before paint (a plain <script src> in <head>,
   right after the styles.css link) to avoid a flash of the wrong theme. */
(function () {
  var KEY = "ieb-theme";
  function read() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }
  function write(t) {
    try {
      localStorage.setItem(KEY, t);
    } catch (e) {}
  }
  function apply(t) {
    document.documentElement.setAttribute("data-theme", t);
  }
  function get() {
    return read() === "dark" ? "dark" : "light";
  }
  function set(t) {
    t = t === "dark" ? "dark" : "light";
    write(t);
    apply(t);
    document.dispatchEvent(new CustomEvent("iebthemechange", {
      detail: {
        theme: t
      }
    }));
  }
  function toggle() {
    set(get() === "dark" ? "light" : "dark");
  }
  apply(get());
  window.IEBTheme = {
    get: get,
    set: set,
    toggle: toggle
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "tokens/theme.js", error: String((e && e.message) || e) }); }

// ui_kits/mis_metas_app/App.jsx
try { (() => {
const {
  BottomNav,
  TopBar
} = window.IEBDesignSystem_afd037;
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 22px 2px",
      fontFamily: "var(--font-display)",
      fontSize: 13,
      fontWeight: 800,
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 5,
      alignItems: "center",
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 10,
      borderRadius: 2,
      border: "1.5px solid var(--text-primary)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 11,
      borderRadius: 3,
      border: "1.5px solid var(--text-primary)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 2,
      right: 7,
      background: "var(--text-primary)",
      borderRadius: 1
    }
  }))));
}
function MobileCanvas({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: "var(--bg-app)",
      borderRadius: 40,
      boxShadow: "0 24px 70px rgba(29,0,60,0.24)",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-body)"
    }
  }, children);
}
function ScreenBody({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 var(--screen-gutter) 24px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--section-gap)",
      ...style
    }
  }, children);
}
function SectionTitle({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h3)",
      fontWeight: "var(--weight-extrabold)",
      color: "var(--text-heading)"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, action));
}
function App() {
  const [tab, setTab] = React.useState("inicio");
  const [route, setRoute] = React.useState(null); // "nueva" | "detalle"
  const [goals, setGoals] = React.useState([{
    id: "g1",
    name: "Viaje a Brasil",
    icon: "plane",
    percent: 42,
    saved: "$180.000",
    target: "$600.000",
    missing: "$420.000",
    date: "Marzo 2027",
    monthly: "$25.000",
    risk: "Conservador",
    instrument: "Fondo IEB+ Ahorro Pesos"
  }, {
    id: "g2",
    name: "Fondo de emergencia",
    icon: "umbrella",
    percent: 18,
    saved: "$54.000",
    target: "$300.000",
    missing: "$246.000",
    date: "Diciembre 2027",
    monthly: "$12.000",
    risk: "Conservador",
    instrument: "Fondo IEB+ Liquidez"
  }]);
  const [current, setCurrent] = React.useState("g1");
  const goal = goals.find(g => g.id === current) || goals[0];
  const openGoal = id => {
    setCurrent(id);
    setRoute("detalle");
  };
  const addGoal = g => {
    setGoals(gs => [...gs, g]);
    setCurrent(g.id);
    setRoute("detalle");
  };
  let screen;
  if (route === "nueva") screen = /*#__PURE__*/React.createElement(NuevaMetaFlow, {
    onClose: () => setRoute(null),
    onDone: addGoal
  });else if (route === "detalle") screen = /*#__PURE__*/React.createElement(MetaDetalleScreen, {
    goal: goal,
    onBack: () => setRoute(null)
  });else if (tab === "inicio") screen = /*#__PURE__*/React.createElement(HomeScreen, {
    goals: goals,
    onOpenGoal: openGoal,
    onNueva: () => setRoute("nueva"),
    onSeeAll: () => setTab("metas"),
    onMercado: () => setTab("mercado")
  });else if (tab === "metas") screen = /*#__PURE__*/React.createElement(MetasScreen, {
    goals: goals,
    onOpenGoal: openGoal,
    onNueva: () => setRoute("nueva")
  });else if (tab === "mercado") screen = /*#__PURE__*/React.createElement(MercadoScreen, null);else if (tab === "research") screen = /*#__PURE__*/React.createElement(ResearchScreen, null);else screen = /*#__PURE__*/React.createElement(PerfilScreen, null);
  return /*#__PURE__*/React.createElement(MobileCanvas, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minHeight: 0
    }
  }, screen), route ? null : /*#__PURE__*/React.createElement(BottomNav, {
    active: tab,
    onSelect: t => {
      setTab(t);
      setRoute(null);
    }
  }));
}
Object.assign(window, {
  App,
  MobileCanvas,
  ScreenBody,
  SectionTitle,
  StatusBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mis_metas_app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mis_metas_app/HomeScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Note,
  ListRow,
  IconButton,
  ProgressBar,
  Icon
} = window.IEBDesignSystem_afd037;
function HomeScreen({
  goals,
  onOpenGoal,
  onNueva,
  onSeeAll,
  onMercado
}) {
  return /*#__PURE__*/React.createElement(ScreenBody, {
    style: {
      gap: "var(--space-6)",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "ieb-help"
  }, "Buen dia"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-h1)"
    }
  }, "Hola, Sofi")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Avisos",
    variant: "soft"
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "soft"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ieb-help"
  }, "Tu dinero invertido"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 10,
      margin: "4px 0 12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-numeric",
    style: {
      fontFamily: "var(--font-numeric)",
      fontSize: "var(--text-amount-xl)",
      lineHeight: "var(--leading-amount-xl)",
      fontWeight: 800,
      color: "var(--text-heading)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, "$234.500"), /*#__PURE__*/React.createElement(Badge, {
    tone: "positive",
    icon: "trending-up"
  }, "+12,4%")), /*#__PURE__*/React.createElement("p", {
    className: "ieb-help"
  }, "Rendimiento de los ultimos 30 dias. Tu plata sigue disponible.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconAfter: "arrow-right",
      onClick: onSeeAll
    }, "Ver todas")
  }, "Tus metas"), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: "var(--space-2) var(--card-padding)"
    }
  }, goals.map(g => /*#__PURE__*/React.createElement(ListRow, {
    key: g.id,
    icon: g.icon,
    title: g.name,
    subtitle: g.percent + "% - " + g.date,
    value: g.saved,
    onClick: () => onOpenGoal(g.id)
  })))), /*#__PURE__*/React.createElement(Card, {
    variant: "secondary",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-media"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "target",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "var(--text-primary)",
      fontSize: "var(--text-body-lg)"
    }
  }, "Invert\xED con un objetivo claro"), /*#__PURE__*/React.createElement("p", {
    className: "ieb-help"
  }, "Dec\xED cu\xE1nto necesit\xE1s y para cu\xE1ndo. Te sugerimos una opci\xF3n y te explicamos por qu\xE9."))), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "md",
    icon: "plus",
    onClick: onNueva
  }, "Crear una meta")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconAfter: "arrow-right",
      onClick: onMercado
    }, "Mercado")
  }, "Hoy en el mercado"), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: "var(--space-2) var(--card-padding)"
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    title: "Merval",
    subtitle: "Indice acciones",
    value: "1.842.310",
    valueSub: "+1,8%",
    chevron: false
  }), /*#__PURE__*/React.createElement(ListRow, {
    title: "Dolar MEP",
    subtitle: "Referencia",
    value: "$1.412",
    valueSub: "-0,3%",
    chevron: false
  }))), /*#__PURE__*/React.createElement(Note, {
    icon: "graduation-cap"
  }, "Invertir de a poco y siempre igual suele funcionar mejor que adivinar el mejor momento."));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mis_metas_app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mis_metas_app/MercadoScreen.jsx
try { (() => {
const {
  TopBar,
  Input,
  Tag,
  Card,
  ListRow,
  Note,
  Badge
} = window.IEBDesignSystem_afd037;
const FILTERS = ["Todos", "Fondos", "Bonos", "Acciones", "Cedears"];
const ROWS = [{
  t: "Fondo IEB+ Ahorro Pesos",
  s: "Riesgo bajo - liquidez 24h",
  v: "38,2%",
  d: "anual est."
}, {
  t: "Cartera IEB+ Balanceada",
  s: "Riesgo medio - 12 meses",
  v: "44,1%",
  d: "anual est."
}, {
  t: "Bono TX28",
  s: "Renta fija en pesos",
  v: "+0,9%",
  d: "hoy"
}, {
  t: "GGAL",
  s: "Acciones Argentina",
  v: "-1,4%",
  d: "hoy"
}, {
  t: "AAPL",
  s: "Cedear",
  v: "+0,6%",
  d: "hoy"
}];
function MercadoScreen() {
  const [filter, setFilter] = React.useState("Todos");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Mercado"
  }), /*#__PURE__*/React.createElement(ScreenBody, {
    style: {
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Busca un fondo o instrumento"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      overflowX: "auto",
      paddingBottom: 2
    }
  }, FILTERS.map(x => /*#__PURE__*/React.createElement(Tag, {
    key: x,
    selected: filter === x,
    onClick: () => setFilter(x)
  }, x))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: "var(--space-2) var(--card-padding)"
    }
  }, ROWS.map(r => /*#__PURE__*/React.createElement(ListRow, {
    key: r.t,
    title: r.t,
    subtitle: r.s,
    value: /*#__PURE__*/React.createElement("span", {
      style: {
        color: r.v.startsWith("-") ? "var(--status-negative)" : "var(--status-positive)"
      }
    }, r.v),
    valueSub: r.d,
    onClick: () => {}
  }))), /*#__PURE__*/React.createElement(Note, null, "Los rendimientos pasados no garantizan los futuros. Te mostramos estimaciones, no promesas.")));
}
Object.assign(window, {
  MercadoScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mis_metas_app/MercadoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mis_metas_app/MetaDetalleScreen.jsx
try { (() => {
const {
  TopBar,
  IconButton,
  Card,
  GoalProgress,
  ListRow,
  Button,
  Badge,
  Note,
  Switch,
  Sheet,
  AmountInput,
  Icon
} = window.IEBDesignSystem_afd037;
function MetaDetalleScreen({
  goal,
  onBack
}) {
  const [auto, setAuto] = React.useState(true);
  const [aporte, setAporte] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: goal.name,
    onBack: onBack,
    action: /*#__PURE__*/React.createElement(IconButton, {
      icon: "pencil",
      label: "Editar meta",
      variant: "soft"
    })
  }), /*#__PURE__*/React.createElement(ScreenBody, {
    style: {
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: -8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-media"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: goal.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    className: "ieb-help"
  }, "Objetivo ", goal.target, " - ", goal.date), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, goal.risk))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(GoalProgress, {
    percent: goal.percent,
    saved: goal.saved,
    missing: goal.missing,
    targetDate: goal.date,
    monthly: goal.monthly
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: "var(--space-2) var(--card-padding)"
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "chart-pie",
    title: "Donde esta invertido",
    subtitle: goal.instrument,
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "calendar-clock",
    title: "Proximo aporte",
    subtitle: "5 de septiembre",
    value: goal.monthly,
    chevron: false
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "receipt",
    title: "Movimientos",
    subtitle: "8 aportes registrados",
    onClick: () => {}
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "secondary"
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Aporte automatico",
    checked: auto,
    onChange: () => setAuto(!auto),
    help: "Debitamos el 5 de cada mes. Lo pausas cuando quieras."
  })), /*#__PURE__*/React.createElement(Note, {
    tone: "warm",
    icon: "sparkles"
  }, "Sumando $3.000 m\xE1s por mes llegar\xEDas a tu meta en enero 2027, dos meses antes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-3) var(--screen-gutter) var(--space-6)",
      display: "flex",
      gap: "var(--space-2)",
      boxShadow: "0 -8px 20px rgba(46,0,95,0.05)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "md",
    icon: "plus",
    onClick: () => setAporte(true)
  }, "Sumar aporte"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md"
  }, "Ajustar")), /*#__PURE__*/React.createElement(Sheet, {
    open: aporte,
    title: "Sumar un aporte",
    onClose: () => setAporte(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      block: true,
      size: "md",
      onClick: () => setAporte(false)
    }, "Confirmar aporte")
  }, /*#__PURE__*/React.createElement(AmountInput, {
    label: "Cu\xE1nto quer\xE9s sumar",
    value: "10000",
    presets: [{
      label: "$5.000",
      value: "5000"
    }, {
      label: "$10.000",
      value: "10000"
    }],
    help: "Se acredita en tu meta el mismo dia."
  })));
}
Object.assign(window, {
  MetaDetalleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mis_metas_app/MetaDetalleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mis_metas_app/MetasScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  ProgressBar,
  Icon,
  Note,
  TopBar
} = window.IEBDesignSystem_afd037;
function GoalSummaryCard({
  goal,
  onClick
}) {
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-media"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: goal.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ieb-row-title"
  }, goal.name), /*#__PURE__*/React.createElement("p", {
    className: "ieb-row-sub"
  }, goal.instrument)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: goal.percent >= 40 ? "brand" : "neutral"
  }, goal.percent, "%"))), /*#__PURE__*/React.createElement(ProgressBar, {
    value: goal.percent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-help"
  }, goal.saved, " de ", goal.target), /*#__PURE__*/React.createElement("span", {
    className: "ieb-help"
  }, goal.date)));
}
function MetasScreen({
  goals,
  onOpenGoal,
  onNueva
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Mis metas IEB+"
  }), /*#__PURE__*/React.createElement(ScreenBody, {
    style: {
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ieb-help",
    style: {
      marginTop: -8
    }
  }, "Segu\xED tu progreso. Pod\xE9s ajustar cualquier meta cuando quieras."), goals.map(g => /*#__PURE__*/React.createElement(GoalSummaryCard, {
    key: g.id,
    goal: g,
    onClick: () => onOpenGoal(g.id)
  })), /*#__PURE__*/React.createElement(Button, {
    block: true,
    icon: "plus",
    onClick: onNueva
  }, "Nueva meta"), /*#__PURE__*/React.createElement(Note, null, "Tener 2 o 3 metas separadas ayuda a no mezclar la plata de las vacaciones con la de emergencias.")));
}
Object.assign(window, {
  MetasScreen,
  GoalSummaryCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mis_metas_app/MetasScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mis_metas_app/NuevaMetaFlow.jsx
try { (() => {
const {
  TopBar,
  Stepper,
  GoalCard,
  AmountInput,
  Select,
  Tag,
  RiskSelector,
  RecommendationCard,
  Button,
  Note,
  Sheet,
  IconButton,
  Card,
  Badge
} = window.IEBDesignSystem_afd037;
const GOALS = [{
  id: "viaje",
  label: "Viaje",
  icon: "plane",
  hint: "Vacaciones o intercambio"
}, {
  id: "auto",
  label: "Auto",
  icon: "car",
  hint: "Tu primer vehiculo"
}, {
  id: "emergencia",
  label: "Emergencia",
  icon: "umbrella",
  hint: "Un colchon para imprevistos"
}, {
  id: "vivienda",
  label: "Vivienda",
  icon: "house",
  hint: "Alquiler o entrada"
}, {
  id: "estudio",
  label: "Estudio",
  icon: "graduation-cap",
  hint: "Cursos o posgrado"
}, {
  id: "otro",
  label: "Otro",
  icon: "sparkles",
  hint: "Vos le pones el nombre"
}];
const PLAZOS = [{
  id: "6",
  label: "6 meses",
  date: "Febrero 2027"
}, {
  id: "12",
  label: "12 meses",
  date: "Agosto 2027"
}, {
  id: "24",
  label: "24 meses",
  date: "Agosto 2028"
}];
function money(n) {
  return "$" + Number(n).toLocaleString("es-AR");
}
function NuevaMetaFlow({
  onClose,
  onDone
}) {
  const [step, setStep] = React.useState(1);
  const [goal, setGoal] = React.useState("viaje");
  const [amount, setAmount] = React.useState("600000");
  const [plazo, setPlazo] = React.useState("12");
  const [risk, setRisk] = React.useState("conservador");
  const [why, setWhy] = React.useState(false);
  const g = GOALS.find(x => x.id === goal);
  const p = PLAZOS.find(x => x.id === plazo);
  const monthly = Math.round(Number(amount || 0) / Number(plazo) / 1000) * 1000;
  const titles = ["Qué meta tenés", "Cuánto y para cuándo", "Cuánto riesgo te sentís cómodo", "Tu opción recomendada"];
  const back = () => step === 1 ? onClose() : setStep(step - 1);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: titles[step - 1],
    eyebrow: "Paso " + step + " de 4",
    onBack: back,
    action: /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      label: "Cerrar",
      variant: "neutral",
      onClick: onClose
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--screen-gutter) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    step: step,
    total: 4
  })), /*#__PURE__*/React.createElement(ScreenBody, {
    style: {
      gap: "var(--space-4)"
    }
  }, step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "ieb-help",
    style: {
      marginTop: -8
    }
  }, "Eleg\xED una. Despu\xE9s pod\xE9s cambiarle el nombre."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--card-gap)"
    }
  }, GOALS.map(x => /*#__PURE__*/React.createElement(GoalCard, {
    key: x.id,
    label: x.label,
    icon: x.icon,
    hint: x.hint,
    selected: goal === x.id,
    onClick: () => setGoal(x.id)
  })))) : null, step === 2 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AmountInput, {
    label: "Cu\xE1nto quer\xE9s juntar",
    value: amount,
    onChange: e => setAmount(e.target.value.replace(/\D/g, "")),
    presets: [{
      label: "$300.000",
      value: "300000"
    }, {
      label: "$600.000",
      value: "600000"
    }, {
      label: "$1.000.000",
      value: "1000000"
    }],
    onPreset: pr => setAmount(pr.value),
    help: "Pod\xE9s cambiarlo cuando quieras."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ieb-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-label"
  }, "En cu\xE1nto tiempo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, PLAZOS.map(x => /*#__PURE__*/React.createElement(Tag, {
    key: x.id,
    selected: plazo === x.id,
    onClick: () => setPlazo(x.id)
  }, x.label))), /*#__PURE__*/React.createElement("span", {
    className: "ieb-help"
  }, "Fecha estimada: ", p.date)), /*#__PURE__*/React.createElement(Note, {
    icon: "calculator"
  }, "Con ese monto y ese plazo necesitas aportar cerca de ", /*#__PURE__*/React.createElement("strong", null, money(monthly)), " por mes.")) : null, step === 3 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "ieb-help",
    style: {
      marginTop: -8
    }
  }, "No hay respuesta correcta. Eleg\xED c\xF3mo te sentir\xEDas si tu meta baja un mes."), /*#__PURE__*/React.createElement(RiskSelector, {
    value: risk,
    onChange: setRisk
  }), /*#__PURE__*/React.createElement(Note, null, "Para metas de menos de 2 a\xF1os solemos sugerir riesgo bajo, as\xED tu plata est\xE1 cuando la necesit\xE1s.")) : null, step === 4 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RecommendationCard, {
    instrument: risk === "arriesgado" ? "Cartera IEB+ Crecimiento" : risk === "intermedio" ? "Cartera IEB+ Balanceada" : "Fondo IEB+ Ahorro Pesos",
    riskLabel: risk === "arriesgado" ? "Riesgo alto" : risk === "intermedio" ? "Riesgo medio" : "Riesgo bajo",
    reason: "Tu meta " + g.label.toLowerCase() + " es en " + plazo + " meses, así que priorizamos estabilidad sobre rendimiento.",
    stats: [{
      label: "Aporte mensual",
      value: money(monthly)
    }, {
      label: "Rendimiento est.",
      value: risk === "arriesgado" ? "52% anual" : risk === "intermedio" ? "44% anual" : "38% anual"
    }],
    onPrimary: () => onDone({
      id: "g" + Date.now(),
      name: g.label,
      icon: g.icon,
      percent: 0,
      saved: "$0",
      target: money(amount),
      missing: money(amount),
      date: p.date,
      monthly: money(monthly),
      risk: risk,
      instrument: "Fondo IEB+ Ahorro Pesos"
    }),
    onWhy: () => setWhy(true)
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "secondary",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ieb-row-title",
    style: {
      fontSize: "var(--text-body)"
    }
  }, "Tu meta en numeros"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-help"
  }, "Objetivo"), /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-value"
  }, money(amount))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-help"
  }, "Fecha estimada"), /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-value"
  }, p.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-help"
  }, "Perfil elegido"), /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-value",
    style: {
      textTransform: "capitalize"
    }
  }, risk))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    size: "md",
    onClick: () => setStep(3)
  }, "Ver otras opciones")) : null), step < 4 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-3) var(--screen-gutter) var(--space-6)",
      background: "var(--bg-app)",
      boxShadow: "0 -8px 20px rgba(46,0,95,0.05)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    iconAfter: "arrow-right",
    onClick: () => setStep(step + 1)
  }, "Continuar")) : null, /*#__PURE__*/React.createElement(Sheet, {
    open: why,
    title: "Por que te lo recomendamos",
    onClose: () => setWhy(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      block: true,
      size: "md",
      onClick: () => setWhy(false)
    }, "Entendido")
  }, /*#__PURE__*/React.createElement(Note, {
    icon: "calendar"
  }, "Tu plazo es de ", plazo, " meses. En plazos cortos evitamos opciones que puedan bajar justo cuando necesitas la plata."), /*#__PURE__*/React.createElement(Note, {
    icon: "shield-check",
    tone: "neutral"
  }, "Elegiste perfil ", risk, ". Ordenamos las opciones de menor a mayor movimiento y te mostramos la primera."), /*#__PURE__*/React.createElement(Note, {
    icon: "sparkles",
    tone: "warm"
  }, "Pod\xE9s cambiar de opci\xF3n en cualquier momento, sin costo.")));
}
Object.assign(window, {
  NuevaMetaFlow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mis_metas_app/NuevaMetaFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mis_metas_app/PerfilScreen.jsx
try { (() => {
const {
  TopBar,
  Card,
  ListRow,
  Switch,
  Badge,
  Button,
  Note,
  Icon
} = window.IEBDesignSystem_afd037;
function PerfilScreen() {
  const [push, setPush] = React.useState(true);
  const [resumen, setResumen] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Perfil"
  }), /*#__PURE__*/React.createElement(ScreenBody, {
    style: {
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "soft",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 52,
      height: 52,
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 20,
      color: "var(--brand-primary)"
    }
  }, "SG"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "ieb-row-title"
  }, "Sofia Gimenez"), /*#__PURE__*/React.createElement("p", {
    className: "ieb-row-sub"
  }, "sofia.g@uni.edu.ar")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Conservador"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: "var(--space-2) var(--card-padding)"
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "shield-check",
    title: "Tu perfil de riesgo",
    subtitle: "Actualizado en junio",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "landmark",
    title: "Cuenta y transferencias",
    subtitle: "CBU y medios de pago",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "file-text",
    title: "Documentos y resumenes",
    subtitle: "Comprobantes mensuales",
    onClick: () => {}
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "secondary",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Avisos de tus metas",
    checked: push,
    onChange: () => setPush(!push),
    help: "Te avisamos cuando pasas un hito."
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Resumen semanal de research",
    checked: resumen,
    onChange: () => setResumen(!resumen)
  })), /*#__PURE__*/React.createElement(Note, {
    icon: "lock"
  }, "Tus inversiones est\xE1n a tu nombre. Pod\xE9s retirarlas cuando quieras."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    size: "md",
    icon: "log-out"
  }, "Cerrar sesi\xF3n")));
}
Object.assign(window, {
  PerfilScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mis_metas_app/PerfilScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mis_metas_app/ResearchScreen.jsx
try { (() => {
const {
  TopBar,
  Card,
  Badge,
  Note,
  Icon,
  Button,
  Tag
} = window.IEBDesignSystem_afd037;
const ARTICLES = [{
  icon: "graduation-cap",
  tag: "Basico",
  title: "Que es un fondo comun de inversion",
  meta: "3 min de lectura"
}, {
  icon: "scale",
  tag: "Basico",
  title: "Riesgo: qué significa en la práctica",
  meta: "4 min de lectura"
}, {
  icon: "line-chart",
  tag: "Mercado",
  title: "Informe semanal: pesos y tasas",
  meta: "6 min de lectura"
}, {
  icon: "piggy-bank",
  tag: "Metas",
  title: "Cuánto guardar por mes según tu meta",
  meta: "5 min de lectura"
}];
function ResearchScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Research"
  }), /*#__PURE__*/React.createElement(ScreenBody, {
    style: {
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ieb-help",
    style: {
      marginTop: -8
    }
  }, "Explicado simple por el equipo de research de IEB+."), ARTICLES.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.title,
    interactive: true,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-media"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    style: {
      alignSelf: "flex-start"
    }
  }, a.tag), /*#__PURE__*/React.createElement("p", {
    className: "ieb-row-title",
    style: {
      fontSize: "var(--text-body-lg)"
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    className: "ieb-row-sub"
  }, a.meta)))), /*#__PURE__*/React.createElement(Note, {
    icon: "mail"
  }, "Te mandamos un resumen cada viernes. Sin jerga, en 5 minutos.")));
}
Object.assign(window, {
  ResearchScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mis_metas_app/ResearchScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Note = __ds_scope.Note;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.AmountInput = __ds_scope.AmountInput;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.IEB_GOALS = __ds_scope.IEB_GOALS;

__ds_ns.GoalCard = __ds_scope.GoalCard;

__ds_ns.GoalProgress = __ds_scope.GoalProgress;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.RecommendationCard = __ds_scope.RecommendationCard;

__ds_ns.IEB_RISK_LEVELS = __ds_scope.IEB_RISK_LEVELS;

__ds_ns.RiskSelector = __ds_scope.RiskSelector;

__ds_ns.IEB_NAV_ITEMS = __ds_scope.IEB_NAV_ITEMS;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
