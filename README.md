# \<shop-form\>

A Polymer element to add serverless forms, using Google Sheets, to the Polymer Shop Demo.
The submitted form data is stored on a Google Sheet.

## Setup Google Sheets

Create a new Google Sheet on Google Drive.

Add the content of "shop-form.gs" as a script for the created Sheet.

Change the first 2 lines of the script, to reflect your reality.

Publish the script as a web app, setting "Execute the app as:" to "Me" and "Who has access to the app:
" to "anyone, even anonymous".

Copy the execution link.

## Shop-form usage:

```
<shop-form gsid="hkjlkhSDFhjshSDF-otYGmHwNM2Mj7rkuGRrLD2ILxO-ndhkg32"
           submit-bt-value="Place Order">
           
    <shop-input>
        <input type="text" id="name" name="name" pattern=".{2,} .{2,}"
               placeholder="Name" autofocus required
               autocomplete="Your Name"
               aria-labelledby="nameLabel nameHeading" />
        <shop-md-decorator error-message="Invalid. Please type full name." aria-hidden="true">
            <label id="nameLabel">Name</label>
            <shop-underline></shop-underline>
        </shop-md-decorator>
    </shop-input>
           
</shop-form>
```

### gsid:

Is the id of the script. You can find it on the script execution url.

For the following URL:

```
https://script.google.com/macros/s/hkjlkhSDFhjshSDF-otYGmHwNM2Mj7rkuGRrLD2ILxO-ndhkg32/exec
```

The id is:
```
hkjlkhSDFhjshSDF-otYGmHwNM2Mj7rkuGRrLD2ILxO-ndhkg32
```

### submit-bt-value:
Sets the text of the form submit button.