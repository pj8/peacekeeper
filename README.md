# Peacekeeper
- Peacekeeper will notify you for each website you specify.

## Install
- [Chrome Web Store : Peacekeeper](https://chrome.google.com/webstore/detail/peacekeeper/dfhhnlmecdgbidblhlidkgiagikjgfip)

## Screenshot
### Before
- Which one is LOCALHOST? You will have an accident someday.
![](before.png)

### After
- It's sooooo peaceful.
![](after.png)

## Configs
### url (required)
- Specify target URL with regular expression
```json
"url": "https://.*stage-admin.+"
```
### alert
- Run JavaScript `alert("blah blah blah")`
```json
"alert": "blah blah blah",
```
- Disable alert
```json
"alert": false,
```
### favicon
- Change the favicon
```json
"favicon": {
  "href": "URL or Data URI",
  "rel": "shortcut icon",
  "type": "image/x-icon"
},
```
- Disable to change the favicon
```json
"favicon": false,
```
### style
- Change style `backgroundColor`
```json
"style": {
  "backgroundColor": "yellow"
},
```
- Disable to change style
```json
"style": false,
```
