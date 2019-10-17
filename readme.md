# Test - TypeScript Language Service Plugin

This is a implementation of the *Writing a Language Service Plugin Wiki* [https://github.com/microsoft/TypeScript/wiki/Writing-a-Language-Service-Plugin]

## setup
- install typescript (my version is `tsc -version` : **Version 3.6.4** )
- run `npm install` in `your_plugin`folder --> `_install.bat`
- fix logging path in `_test.bat` 

## build plugin
- run `tsc` in `your_plugin`folder --> `_build.bat`

## test plugin with logging
- setup `set TSS_LOG=...`
- run `tsc` in `sample_project` folder --> `test.bat`


## state:
- **OK**: build of plugin is after adding `undefined` to `info.languageService.getCompletionsAtPosition`
- **OK**: build of `test.ts` is 
- **Fail**: logging output!
- **Fail**: replacing of `getDay` in `test.js` output!
