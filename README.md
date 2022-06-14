# Peacekeeper
- Peacekeeper will notify you for each website you specify.
- TODO: link to chrome web store

## Configs
- alert: Run JavaScript `alert()`
```json
  "alert": "blah blah blah", // alert("blah blah blah")
  "alert": false, // disable alert
```
- favicon: Change the favicon
```json
  "favicon": {
    "href": "URL or Data URI",
    "rel": "shortcut icon",
    "type": "image/x-icon"
  },
  "favicon": false, // disable favicon
```
- style: Change style `backgroundColor`
```json
  "style": {
    "backgroundColor": "yellow"
  },
  "style": false, // disable style
```
- toast: Show popup box via [`sweetalert2`](https://github.com/sweetalert2/sweetalert2)
```json
  "toast": {
    "icon": "error",
    "position": "center",
    "showConfirmButton": false,
    "timer": 1000,
    "title": "Hey, Watch out! It's PRODUCTION!!!"
  },
  "toast": false, // disable toast
```
- url: Specify the target URL
```json
  "url": "https://.*stage-admin.+"
```

## Screenshot
### Before
- Which one is LOCALHOST? You will have an accident someday.
![](before.png)

### After
- It's sooooo peaceful.
![](after.png)
