import {
  lighten,
  darken,
  adjustHue,
  stripUnit,
} from 'polished';


const addFontSizes = (...fontSizes) => {
  const sum = fontSizes.map(stripUnit).reduce((a, b) => a + b);
  const unit = fontSize[0].split(value)[1];

  return `${sum}${unit}`;
};

const subtractFontSizes = (fontSize1, fontSize2) => {
  const difference = stripUnit(fontSize1) - stripUnit(fontSize2);
  const unit = fontSize1[0].split(value)[1];

  return `${difference}${unit}`;
};

const multiplyFontSize = (multiplier, fontSize) => {
  const value = stripUnit(fontSize);
  const unit = fontSize.split(value)[1];

  return `${value * multiplier}${unit}`;
};

const divideFontSize = (divisor, fontSize) => {
  const value = stripUnit(fontSize);
  const unit = fontSize.split(value)[1];

  return `${value / divisor}${unit}`;
};

const roundFontSize = (roundingCriteria, fontSize) => {
  const value = stripUnit(fontSize);
  const unit = fontSize.split(value)[1];

  return `${Math[roundingCriteria](value * 1.25)}${unit}`;
};

export const bootstrapSassAssetHelper = false;
//
// Variables
// --------------------------------------------------


//== Colors
//
//## Gray and brand colors for use across Bootstrap.

export const grayBase = '#000';
export const grayDarker = lighten(0.135, grayBase); // #222
export const grayDark = lighten(0.2, grayBase);   // #333
export const gray = lighten(0.335, grayBase); // #555
export const grayLight = lighten(0.467, grayBase); // #777
export const grayLighter = lighten(0.935, grayBase); // #eee

export const brandPrimary = darken(0.65, '#428bca'); // #337ab7
export const brandSuccess = '#5cb85c';
export const brandInfo = '#5bc0de';
export const brandWarning = '#f0ad4e';
export const brandDanger = '#d9534f';


//== Scaffolding
//
//## Settings for some of the most global styles.

//** Background color for `<body>`.
export const bodyBg = '#fff';
//** Global text color on `<body>`.
export const textColor = grayDark;

//** Global textual link color.
export const linkColor = brandPrimary;
//** Link hover color set via `darken()` function.
export const linkHoverColor = darken(0.15, linkColor);
//** Link hover decoration.
export const linkHoverDecoration = underline;


//== Typography
//
//## Font, line-height, and color for body text, headings, and more.

export const fontFamilySansSerif = '"Helvetica Neue", Helvetica, Arial, sans-serif';
export const fontFamilySerif = 'Georgia, "Times New Roman", Times, serif';
//** Default monospace fonts for `<code>`, `<kbd>`, and `<pre>`.
export const fontFamilyMonospace = 'Menlo, Monaco, Consolas, "Courier New", monospace';
export const fontFamilyBase = fontFamilySansSerif;

export const fontSizeBase = '14px';
export const fontSizeLarge = roundFontSize('ceil', multiplyFontSize(1.25, fontSizeBase)); // ~18px
export const fontSizeSmall = roundFontSize('ceil', multiplyFontSize(0.85, fontSizeBase)); // ~12px

export const fontSizeH1 = roundFontSize('floor', multiplyFontSize(2.6, fontSizeBase)); // ~36px
export const fontSizeH2 = roundFontSize('floor', multiplyFontSize(2.15, fontSizeBase)); // ~30px
export const fontSizeH3 = roundFontSize('floor', multiplyFontSize(1.7, fontSizeBase)); // ~24px
export const fontSizeH4 = roundFontSize('ceil', multiplyFontSize(1.25, fontSizeBase)); // ~18px
export const fontSizeH5 = fontSizeBase;
export const fontSizeH6 = roundFontSize('ceil', multiplyFontSize(0.85, fontSizeBase)); // ~12px

//** Unit-less `line-height` for use in components like buttons.
export const lineHeightBase = 1.428571429; // 20/14
//** Computed "line-height" (`font-size` * `line-height`) for use with `margin`, `padding`, etc.
export const lineHeightComputed = roundFontSize('floor', multiplyFontSize(lineHeightBase, fontSizeBase)); // ~20px

//** By default, this inherits from the `<body>`.
export const headingsFontFamily = 'inherit';
export const headingsFontWeight = 500;
export const headingsLineHeight = 1.1;
export const headingsColor = 'inherit';


//== Iconography
//
//## Specify custom location and filename of the included Glyphicons icon font. Useful for those including Bootstrap via Bower.

//** Load fonts from this directory.

// [converter] If bootstrapSassAssetHelper if used, provide path relative to the assets load path.
// [converter] This is because some asset helpers, such as Sprockets, do not work with file-relative paths.
export const iconFontPath = (
  bootstrapSassAssetHelper ? 'bootstrap/' : '../fonts/bootstrap/'
);

//** File name for all font files.
export const iconFontName = 'glyphicons-halflings-regular';
//** Element ID within SVG icon file.
export const iconFontSvgId = 'glyphicons_halflingsregular';


//== Components
//
//## Define common padding and border radius sizes and more. Values based on 14px text and 1.428 line-height (~20px to start).

export const paddingBaseVertical = '6px';
export const paddingBaseHorizontal = '12px';

export const paddingLargeVertical = '10px';
export const paddingLargeHorizontal = '16px';

export const paddingSmallVertical = '5px';
export const paddingSmallHorizontal = '10px';

export const paddingXsVertical = '1px';
export const paddingXsHorizontal = '5px';

export const lineHeightLarge = 1.3333333; // extra decimals for Win 8.1 Chrome
export const lineHeightSmall = 1.5;

export const borderRadiusBase = '4px';
export const borderRadiusLarge = '6px';
export const borderRadiusSmall = '3px';

//** Global color for active items (e.g., navs or dropdowns).
export const componentActiveColor = '#fff';
//** Global background color for active items (e.g., navs or dropdowns).
export const componentActiveBg = brandPrimary;

//** Width of the `border` for generating carets that indicate dropdowns.
export const caretWidthBase = '4px';
//** Carets increase slightly in size for larger components.
export const caretWidthLarge = '5px';


//== Tables
//
//## Customizes the `.table` component with basic values, each used across all table variations.

//** Padding for `<th>`s and `<td>`s.
export const tableCellPadding = '8px';
//** Padding for cells in `.table-condensed`.
export const tableCondensedCellPadding = '5px';

//** Default background color used for all tables.
export const tableBg = 'transparent';
//** Background color used for `.table-striped`.
export const tableBgAccent = '#f9f9f9';
//** Background color used for `.table-hover`.
export const tableBgHover = '#f5f5f5';
export const tableBgActive = tableBgHover;

//** Border color for table and cell borders.
export const tableBorderColor = '#ddd';


//== Buttons
//
//## For each of Bootstrap's buttons, define text, background and border color.

export const btnFontWeight = 'normal';

export const btnDefaultColor = '#333';
export const btnDefaultBg = '#fff';
export const btnDefaultBorder = '#ccc';

export const btnPrimaryColor = '#fff';
export const btnPrimaryBg = brandPrimary;
export const btnPrimaryBorder = darken(0.05, btnPrimaryBg);

export const btnSuccessColor = '#fff';
export const btnSuccessBg = brandSuccess;
export const btnSuccessBorder = darken(0.05, btnSuccessBg);

export const btnInfoColor = '#fff';
export const btnInfoBg = brandInfo;
export const btnInfoBorder = darken(0.05, btnInfoBg);

export const btnWarningColor = '#fff';
export const btnWarningBg = brandWarning;
export const btnWarningBorder = darken(0.05, btnWarningBg);

export const btnDangerColor = '#fff';
export const btnDangerBg = brandDanger;
export const btnDangerBorder = darken(0.05, btnDangerBg);

export const btnLinkDisabledColor = grayLight;

// Allows for customizing button radius independently from global border radius
export const btnBorderRadiusBase = borderRadiusBase;
export const btnBorderRadiusLarge = borderRadiusLarge;
export const btnBorderRadiusSmall = borderRadiusSmall;


//== Forms
//
//##

//** `<input>` background color
export const inputBg = '#fff';
//** `<input disabled>` background color
export const inputBgDisabled = grayLighter;

//** Text color for `<input>`s
export const inputColor = gray;
//** `<input>` border color
export const inputBorder = '#ccc';

// TODO: Rename `inputBorderRadius` to `inputBorderRadiusBase` in v4
//** Default `.form-control` border radius
// This has no effect on `<select>`s in some browsers, due to the limited stylability of `<select>`s in CSS.
export const inputBorderRadius = borderRadiusBase;
//** Large `.form-control` border radius
export const inputBorderRadiusLarge = borderRadiusLarge;
//** Small `.form-control` border radius
export const inputBorderRadiusSmall = borderRadiusSmall;

//** Border color for inputs on focus
export const inputBorderFocus = '#66afe9';

//** Placeholder text color
export const inputColorPlaceholder = '#999';

//** Default `.form-control` height
export const inputHeightBase = addFontSizes(lineHeightComputed, + multiplyFontSize(2, paddingBaseVertical), '2px');
//** Large `.form-control` height
export const inputHeightLarge = addFontSizes(roundFontSize('ceil', multiplyFontSize(lineHeightLarge, fontSizeLarge)), multiplyFontSize(2, paddingLargeVertical), '2px');
//** Small `.form-control` height
export const inputHeightSmall = addFontSizes(roundFontSize('floor', multiplyFontSize(lineHeightSmall, fontSizeSmall)), multiplyFontSize(2, paddingSmallVertical), '2px');

//** `.form-group` margin
export const formGroupMarginBottom = '15px';

export const legendColor = grayDark;
export const legendBorderColor = '#e5e5e5';

//** Background color for textual input addons
export const inputGroupAddonBg = grayLighter;
//** Border color for textual input addons
export const inputGroupAddonBorderColor = inputBorder;

//** Disabled cursor for form controls and buttons.
export const cursorDisabled = 'not-allowed';


//== Dropdowns
//
//## Dropdown menu container and contents.

//** Background for the dropdown menu.
export const dropdownBg = '#fff';
//** Dropdown menu `border-color`.
export const dropdownBorder = 'rgba(0, 0, 0, .15)';
//** Dropdown menu `border-color` **for IE8**.
export const dropdownFallbackBorder = '#ccc';
//** Divider color for between dropdown items.
export const dropdownDividerBg = '#e5e5e5';

//** Dropdown link text color.
export const dropdownLinkColor = grayDark;
//** Hover color for dropdown links.
export const dropdownLinkHoverColor = darken(0.05, grayDark);
//** Hover background for dropdown links.
export const dropdownLinkHoverBg = '#f5f5f5';

//** Active dropdown menu item text color.
export const dropdownLinkActiveColor = componentActiveColor;
//** Active dropdown menu item background color.
export const dropdownLinkActiveBg = componentActiveBg;

//** Disabled dropdown menu item background color.
export const dropdownLinkDisabledColor = grayLight;

//** Text color for headers within dropdown menus.
export const dropdownHeaderColor = grayLight;

//** Deprecated `dropdownCaretColor` as of v3.1.0
export const dropdownCaretColor = '#000';


//-- Z-index master list
//
// Warning: Avoid customizing these values. They're used for a bird's eye view
// of components dependent on the z-axis and are designed to all work together.
//
// Note: These variables are not generated into the Customizer.

export const zindexNavbar = 1000;
export const zindexDropdown = 1000;
export const zindexPopover = 1060;
export const zindexTooltip = 1070;
export const zindexNavbarFixed = 1030;
export const zindexModalBackground = 1040;
export const zindexModal = 1050;


//== Media queries breakpoints
//
//## Define the breakpoints at which your layout will change, adapting to different screen sizes.

// Extra small screen / phone
//** Deprecated `screenXs` as of v3.0.1
export const screenXs = '480px';
//** Deprecated `screenXsMin` as of v3.2.0
export const screenXsMin = screenXs;
//** Deprecated `screenPhone` as of v3.0.1
export const screenPhone = screenXsMin;

// Small screen / tablet
//** Deprecated `screenSm` as of v3.0.1
export const screenSm = '768px';
export const screenSmMin = screenSm;
//** Deprecated `screenTablet` as of v3.0.1
export const screenTablet = screenSmMin;

// Medium screen / desktop
//** Deprecated `screenMd` as of v3.0.1
export const screenMd = '992px';
export const screenMdMin = screenMd;
//** Deprecated `screenDesktop` as of v3.0.1
export const screenDesktop = screenMdMin;

// Large screen / wide desktop
//** Deprecated `screenLg` as of v3.0.1
export const screenLg = '1200px';
export const screenLgMin = screenLg;
//** Deprecated `screenLgDesktop` as of v3.0.1
export const screenLgDesktop = screenLgMin;

// So media queries don't overlap when required, provide a maximum
export const screenXsMax = subtractFontSizes(screenSmMin, '1px');
export const screenSmMax = subtractFontSizes(screenMdMin, '1px');
export const screenMdMax = subtractFontSizes(screenLgMin, '1px');


//== Grid system
//
//## Define your custom responsive grid.

//** Number of columns in the grid.
export const gridColumns = 12;
//** Padding between columns. Gets divided in half for the left and right.
export const gridGutterWidth = '30px';
// Navbar collapse
//** Point at which the navbar becomes uncollapsed.
export const gridFloatBreakpoint = screenSmMin;
//** Point at which the navbar begins collapsing.
export const gridFloatBreakpointMax = subtractFontSizes(gridFloatBreakpoint, '1px');


//== Container sizes
//
//## Define the maximum width of `.container` for different screen sizes.

// Small screen / tablet
export const containerTablet = addFontSizes('720px', gridGutterWidth);
//** For `screenSmMin` and up.
export const containerSm = containerTablet;

// Medium screen / desktop
export const containerDesktop = addFontSizes('940px', gridGutterWidth);
//** For `screenMdMin` and up.
export const containerMd = containerDesktop;

// Large screen / wide desktop
export const containerLargeDesktop = addFontSizes('1140px', gridGutterWidth);
//** For `screenLgMin` and up.
export const containerLg = containerLargeDesktop;


//== Navbar
//
//##

// Basics of a navbar
export const navbarHeight = '50px';
export const navbarMarginBottom = lineHeightComputed;
export const navbarBorderRadius = borderRadiusBase;
export const navbarPaddingHorizontal = roundFontSize('floor', divideFontSize(2, gridGutterWidth));
export const navbarPaddingVertical = divideFontSize(2, subtractFontSizes(navbarHeight, lineHeightComputed));
export const navbarCollapseMaxHeight = '340px';

export const navbarDefaultColor = '#777';
export const navbarDefaultBg = '#f8f8f8';
export const navbarDefaultBorder = darken(0.065, navbarDefaultBg);

// Navbar links
export const navbarDefaultLinkColor = '#777';
export const navbarDefaultLinkHoverColor = '#333';
export const navbarDefaultLinkHoverBg = 'transparent';
export const navbarDefaultLinkActiveColor = '#555';
export const navbarDefaultLinkActiveBg = darken(0.065, navbarDefaultBg);
export const navbarDefaultLinkDisabledColor = '#ccc';
export const navbarDefaultLinkDisabledBg = 'transparent';

// Navbar brand label
export const navbarDefaultBrandColor = navbarDefaultLinkColor;
export const navbarDefaultBrandHoverColor = darken(0.1, navbarDefaultBrandColor);
export const navbarDefaultBrandHoverBg = 'transparent';

// Navbar toggle
export const navbarDefaultToggleHoverBg = '#ddd';
export const navbarDefaultToggleIconBarBg = '#888';
export const navbarDefaultToggleBorderColor = '#ddd';


//=== Inverted navbar
// Reset inverted navbar basics
export const navbarInverseColor = lighten(0.15, grayLight);
export const navbarInverseBg = '#222';
export const navbarInverseBorder = darken(0.1, navbarInverseBg);

// Inverted navbar links
export const navbarInverseLinkColor = lighten(0.15, grayLight);
export const navbarInverseLinkHoverColor = '#fff';
export const navbarInverseLinkHoverBg = 'transparent';
export const navbarInverseLinkActiveColor = navbarInverseLinkHoverColor;
export const navbarInverseLinkActiveBg = darken(0.1, navbarInverseBg);
export const navbarInverseLinkDisabledColor = '#444';
export const navbarInverseLinkDisabledBg = 'transparent';

// Inverted navbar brand label
export const navbarInverseBrandColor = navbarInverseLinkColor;
export const navbarInverseBrandHoverColor = '#fff';
export const navbarInverseBrandHoverBg = 'transparent';

// Inverted navbar toggle
export const navbarInverseToggleHoverBg = '#333';
export const navbarInverseToggleIconBarBg = '#fff';
export const navbarInverseToggleBorderColor = '#333';


//== Navs
//
//##

//=== Shared nav styles
export const navLinkPadding = '10px 15px';
export const navLinkHoverBg = grayLighter;

export const navDisabledLinkColor = grayLight;
export const navDisabledLinkHoverColor = grayLight;

//== Tabs
export const navTabsBorderColor = '#ddd';

export const navTabsLinkHoverBorderColor = grayLighter;

export const navTabsActiveLinkHoverBg = bodyBg;
export const navTabsActiveLinkHoverColor = gray;
export const navTabsActiveLinkHoverBorderColor = '#ddd';

export const navTabsJustifiedLinkBorderColor = '#ddd';
export const navTabsJustifiedActiveLinkBorderColor = bodyBg;

//== Pills
export const navPillsBorderRadius = BorderRadiusBase;
export const navPillsActiveLinkHoverBg = componentActiveBg;
export const navPillsActiveLinkHoverColor = componentActiveColor;


//== Pagination
//
//##

export const paginationColor = linkColor;
export const paginationBg = '#fff';
export const paginationBorder = '#ddd';

export const paginationHoverColor = linkHoverColor;
export const paginationHoverBg = grayLighter;
export const paginationHoverBorder = '#ddd';

export const paginationActiveColor = '#fff';
export const paginationActiveBg = brandPrimary;
export const paginationActiveBorder = brandPrimary;

export const paginationDisabledColor = grayLight;
export const paginationDisabledBg = '#fff';
export const paginationDisabledBorder = '#ddd';


//== Pager
//
//##

export const pagerBg = paginationBg;
export const pagerBorder = paginationBorder;
export const pagerBorderRadius = '15px';

export const pagerHoverBg = paginationHoverBg;

export const pagerActiveBg = paginationActiveBg;
export const pagerActiveColor = paginationActiveColor;

export const pagerDisabledColor = paginationDisabledColor;


//== Jumbotron
//
//##

export const jumbotronPadding = '30px';
export const jumbotronColor = 'inherit';
export const jumbotronBg = grayLighter;
export const jumbotronHeadingColor = 'inherit';
export const jumbotronFontSize = roundFontSize('ceil', multiplyFontSize(1.5, fontSizeBase));
export const jumbotronHeadingFontSize = roundFontSize('ceil', multiplyFontSize(4.5, fontSizeBase));


//== Form states and alerts
//
//## Define colors for form feedback states and, by default, alerts.

export const stateSuccessText = '#3c763d';
export const stateSuccessBg = '#dff0d8';
export const stateSuccessBorder = darken(0.05, adjustHue(-10, stateSuccessBg));

export const stateInfoText = '#31708f';
export const stateInfoBg = '#d9edf7';
export const stateInfoBorder = darken(0.07, adjustHue(-10, stateInfoBg));

export const stateWarningText = '#8a6d3b';
export const stateWarningBg = '#fcf8e3';
export const stateWarningBorder = darken(0.05, adjustHue(-10, stateWarningBg));

export const stateDangerText = '#a94442';
export const stateDangerBg = '#f2dede';
export const stateDangerBorder = darken(0.05, adjustHue(-10, stateDangerBg));


//== Tooltips
//
//##

//** Tooltip max width
export const tooltipMaxWidth = '200px';
//** Tooltip text color
export const tooltipColor = '#fff';
//** Tooltip background color
export const tooltipBg = '#000';
export const tooltipOpacity = 0.9;

//** Tooltip arrow width
export const tooltipArrowWidth = '5px';
//** Tooltip arrow color
export const tooltipArrowColor = tooltipBg;


//== Popovers
//
//##

//** Popover body background color
export const popoverBg = '#fff';
//** Popover maximum width
export const popoverMaxWidth = '276px';
//** Popover border color
export const popoverBorderColor = 'rgba(0, 0, 0, 0.2)';
//** Popover fallback border color
export const popoverFallbackBorderColor = '#ccc';

//** Popover title background color
export const popoverTitleBg = darken(0.03, popoverBg);

//** Popover arrow width
export const popoverArrowWidth = '10px';
//** Popover arrow color
export const popoverArrowColor = popoverBg;

//** Popover outer arrow width
export const popoverArrowOuterWidth = addFontSizes(popoverArrowWidth, '1px');
//** Popover outer arrow color
export const popoverArrowOuterColor = 'rgba(0, 0, 0, 0.25)'; // fade_in(popoverBorderColor, 0.05), fade_in not available
//** Popover outer arrow fallback color
export const popoverArrowOuterFallbackColor = darken(0.2, popoverFallbackBorderColor);


//== Labels
//
//##

//** Default label background color
export const labelDefaultBg = grayLight;
//** Primary label background color
export const labelPrimaryBg = brandPrimary;
//** Success label background color
export const labelSuccessBg = brandSuccess;
//** Info label background color
export const labelInfoBg = brandInfo;
//** Warning label background color
export const labelWarningBg = brandWarning;
//** Danger label background color
export const labelDangerBg = brandDanger;

//** Default label text color
export const labelColor = '#fff';
//** Default text color of a linked label
export const labelLinkHoverColor = '#fff';


//== Modals
//
//##

//** Padding applied to the modal body
export const modalInnerPadding = '15px';

//** Padding applied to the modal title
export const modalTitlePadding = '15px';
//** Modal title line-height
export const modalTitleLineHeight = lineHheightBase;

//** Background color of modal content area
export const modalContentBg = '#fff';
//** Modal content border color
export const modalContentBorderColor = 'rgba(0, 0, 0, 0.2)';
//** Modal content border color **for IE8**
export const modalContentFallbackBorderColor = '#999';

//** Modal backdrop background color
export const modalBackdropBg = '#000';
//** Modal backdrop opacity
export const modalBackdropOpacity = 0.5;
//** Modal header border color
export const modalHeaderBorderColor = '#e5e5e5';
//** Modal footer border color
export const modalFooterBorderColor = modalHeaderBorderColor;

export const modalLg = '900px';
export const modalMd = '600px';
export const modalSm = '300px';


//== Alerts
//
//## Define alert colors, border radius, and padding.

export const alertPadding = '15px';
export const alertBorderRadius = borderRadiusBase;
export const alertLinkFontWeight = 'bold';

export const alertSuccessBg = stateSuccessBg;
export const alertSuccessText = stateSuccessText;
export const alertSuccessBorder = stateSuccessBorder;

export const alertInfoBg = stateInfoBg;
export const alertInfoText = stateInfoText;
export const alertInfoBorder = stateInfoBorder;

export const alertWarningBg = stateWarningBg;
export const alertWarningText = stateWarningText;
export const alertWarningBorder = stateWarningBorder;

export const alertDangerBg = stateDangerBg;
export const alertDangerText = stateDangerText;
export const alertDangerBorder = stateDangerBorder;


//== Progress bars
//
//##

//** Background color of the whole progress component
export const progressBg = '#f5f5f5';
//** Progress bar text color
export const progressBarColor = '#fff';
//** Variable for setting rounded corners on progress bar.
export const progressBorderRadius = borderRadiusBase;

//** Default progress bar color
export const progressBarBg = brandPrimary;
//** Success progress bar color
export const progressBarSuccessBg = brandSuccess;
//** Warning progress bar color
export const progressBarWarningBg = brandWarning;
//** Danger progress bar color
export const progressBarDangerBg = brandDanger;
//** Info progress bar color
export const progressBarInfoBg = brandInfo;


//== List group
//
//##

//** Background color on `.list-group-item`
export const listGroupBg = '#fff';
//** `.list-group-item` border color
export const listGroupBorder = '#ddd';
//** List group border radius
export const listGroupBorderRadius = borderRadiusBase;

//** Background color of single list items on hover
export const listGroupHoverBg = '#f5f5f5';
//** Text color of active list items
export const listGroupActiveColor = componentActiveColor;
//** Background color of active list items
export const listGroupActiveBg = componentActiveBg;
//** Border color of active list elements
export const listGroupActiveBorder = listGroupActiveBg;
//** Text color for content within active list items
export const listGroupActiveTextColor = lighten(0.4, listGroupActiveBg);

//** Text color of disabled list items
export const listGroupDisabledColor = grayLight;
//** Background color of disabled list items
export const listGroupDisabledBg = grayLighter;
//** Text color for content within disabled list items
export const listGroupDisabledTextColor = listGroupDisabledColor;

export const listGroupLinkColor = '#555';
export const listGroupLinkHoverColor = listGroupLinkColor;
export const listGroupLinkHeadingColor = '#333';


//== Panels
//
//##

export const panelBg = '#fff';
export const panelBodyPadding = '15px';
export const panelHeadingPadding = '10px 15px';
export const panelFooterPadding = panelHeadingPadding;
export const panelBorderRadius = borderRadiusBase;

//** Border color for elements within panels
export const panelInnerBorder = '#ddd';
export const panelFooterBg = '#f5f5f5';

export const panelDefaultText = grayDark;
export const panelDefaultBorder = '#ddd';
export const panelDefaultHeadingBg = '#f5f5f5';

export const panelPrimaryText = '#fff';
export const panelPrimaryBorder = brandPrimary;
export const panelPrimaryHeadingBg = brandPrimary;

export const panelSuccessText = stateSuccessText;
export const panelSuccessBorder = stateSuccessBorder;
export const panelSuccessHeadingBg = stateSuccessBg;

export const panelInfoText = stateInfoText;
export const panelInfoBorder = stateInfoBorder;
export const panelInfoHeadingBg = stateInfoBg;

export const panelWarningText = stateWarningText;
export const panelWarningBorder = stateWarningBorder;
export const panelWarningHeadingBg = stateWarningBg;

export const panelDangerText = stateDangerText;
export const panelDangerBorder = stateDangerBorder;
export const panelDangerHeadingBg = stateDangerBg;


//== Thumbnails
//
//##

//** Padding around the thumbnail image
export const thumbnailPadding = '4px';
//** Thumbnail background color
export const thumbnailBg = bodyBg;
//** Thumbnail border color
export const thumbnailBorder = '#ddd';
//** Thumbnail border radius
export const thumbnailBorderRadius = borderRadiusBase;

//** Custom text color for thumbnail captions
export const thumbnailCaptionColor = textColor;
//** Padding around the thumbnail caption
export const thumbnailCaptionPadding = '9px';


//== Wells
//
//##

export const wellBg = '#f5f5f5';
export const wellBorder = darken(0.07, wellBg);


//== Badges
//
//##

export const badgeColor = '#fff';
//** Linked badge text color on hover
export const badgeLinkHoverColor = '#fff';
export const badgeBg = grayLight;

//** Badge text color in active nav link
export const badgeActiveColor = linkColor;
//** Badge background color in active nav link
export const badgeActiveBg = '#fff';

export const badgeFontWeight = 'bold';
export const badgeLineHeight = 1;
export const badgeBorderRadius = '10px';


//== Breadcrumbs
//
//##

export const breadcrumbPaddingVertical = '8px';
export const breadcrumbPaddingHorizontal = '15px';
//** Breadcrumb background color
export const breadcrumbBg = '#f5f5f5';
//** Breadcrumb text color
export const breadcrumbColor = '#ccc';
//** Text color of current page in the breadcrumb
export const breadcrumbActiveColor = grayLight;
//** Textual separator for between breadcrumb elements
export const breadcrumbSeparator = '/';


//== Carousel
//
//##

export const carouselTextShadow = '0 1px 2px rgba(0, 0, 0, 0.6)';

export const carouselControlColor = '#fff';
export const carouselControlWidth = '15%';
export const carouselControlOpacity = 0.5;
export const carouselControlFontSize = '20px';

export const carouselIndicatorActiveBg = '#fff';
export const carouselIndicatorBorderColor = '#fff';

export const carouselCaptionColor = '#fff';


//== Close
//
//##

export const closeFontWeight = 'bold';
export const closeColor = '#000';
export const closeTextShadow = '0 1px 0 #fff';


//== Code
//
//##

export const codeColor = '#c7254e';
export const codeBg = '#f9f2f4';

export const kbdBolor = '#fff';
export const kbdBg = '#333';

export const preBg = '#f5f5f5';
export const preColor = grayDark;
export const preBorderColor = '#ccc';
export const preScrollableMaxHeight = '340px';


//== Type
//
//##

//** Horizontal offset for forms and lists.
export const componentOffsetHorizontal = '180px';
//** Text muted color
export const textMuted = grayLight;
//** Abbreviations and acronyms border color
export const abbrBorderColor = grayLight;
//** Headings small  = headings-small-color:        grayLight;
//** Blockquote small c = blockquote-small-color:      grayLight;
//** Blockquote font size
export const blockquoteFontSize = multiplyFontSize(1.25, fontSizeBase);
//** Blockquote border color
export const blockquoteBorderColor = grayLighter;
//** Page header border color
export const pageHeaderBorderColor = grayLighter;
//** Width of horizontal description list titles
export const dlHorizontalOffset = componentOffsetHorizontal;
//** Point at which .dl-horizontal becomes horizontal
export const dlHorizontalBreakpoint = gridFloatBreakpoint;
//** Horizontal line color.
export const hrBorder = grayLighter;
