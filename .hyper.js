// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

const green = "#4DB389";

module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily:
      '"Meslo LG M for Powerline", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    // cursorColor: '#7e57c2',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: "BLOCK",

    // set to true for blinking cursor
    cursorBlink: false,

    // color of the text
    // foregroundColor: '#feffff',

    // terminal background color
    // backgroundColor: '#011627',

    // border color (window, tabs)
    // borderColor: '#4DB389',

    // custom css to embed in the main window
    css: `
      .hyper_main {
        border: 2px solid ${green} !important;
      }

      .tabs_nav {
        margin-top: 2px;
      }

      .tabs_list li:last-child {
        margin-right: 2px;
      }
    `,

    // custom css to embed in the terminal window
    termCSS: "",

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: "",

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: "",

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: "12px 14px",

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    // make sure to use a full path if the binary name doesn't work
    // (e.g `C:\\Windows\\System32\\bash.exe` instead of just `bash.exe`)
    // if you're using powershell, make sure to remove the `--login` below
    shell: "/bin/zsh",

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ["--login"],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: false,

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg

    // SCREENCASTING
    // fontSize: 17,
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: ["hyper-search", "hyper-night-owl", "hyper-final-say"],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
