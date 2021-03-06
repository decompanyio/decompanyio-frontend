# Release Note

## 2020.10.28-a

Bug fix

- tracking/tracking detail page not working
- modal position fix
- fullscreen component wrong position
- edit size of search icon in tracking page
- add condition on document edit modal 

## 2020.10.12-a
- change Medium profile url

## 2020.10.06-b
- add get wallet withdraw request API 

Bug fix

- wallet history not working

## 2020.09.29-a
- add wallet history tab on profile page

## 2020.09.23-a
- change main logo image in header

## 2020.09.18-a
- add alert message about wallet process

## 2020.09.17-a
- add token wallet

Bug fix

- fix wrong history data
- edit main event component 

## 2020.09.14-b

Bug fix

- fix broken image on publish complete modal
- add korean cc text on publish modal 
- encode the og url string to URI on viewer page 
- edit embed url to viewer page url on sharing sns link

## 2020.09.10-a

Bug fix

- over z-index of loading bar
- static logo image changed

## 2020.09.03-a

- add deposit, withdraw

## 2020.09.02-a

- add QR code generator

## 2020.08.28-b

Bug fix

- pagination not working

## 2020.08.27-a

- add aria-label to buttons
- add mylist and history list on profile page

Bug fix

- not including meta component in main page

## 2020.08.25-b

- improved main page loading speed

## 2020.08.24-b

- edit document top list in main page
- edit tag category to display the searched tags

Bug fix

- tag input searching not working

## 2020.08.18-a

- add env valuable for tablet device

Bug fix

- SNS icon not showing in viewer page
- document thumbnail not showing in SSR

## 2020.08.14-c

- available key 'enter' in tag inputs

## 2020.08.13-a

- edit GET bookmark API

## 2020.08.11-a

- add new header

Bug fix

- profile card not showing up

## 2020.08.07-a

- add notice bar on main page
- optimized structure of project for distributing the workspace of developer and designer
- add 404 page

Bug fix

- link to 404 page when refreshing page with korean title

## 2020.08.04-a

Bug fix

- issue occurred when link to list page by clicking tag button on main page

## 2020.07.31-c

- optimized logic in contents list page
- add korean ver. policy

Bug fix

- the order of tags is displayed incorrectly

## 2020.07.28-c

- add health check page

## 2020.07.23-a

- add new main page

## 2020.07.14-a

Bug fix

- pdf not compiled issue

## 2020.07.10-b

- edit css

Bug fix

- profile avatar not edit

## 2020.06.29-a

Bug fix

- interval check compiling uploaded document

## 2020.06.23-a

- edit css

Bug fix

- service worker not registered
- graphql error

## 2020.06.19-b

- changed medium link

Bug fix

- reward, vote, pageview not showing

## 2020.06.17-a

- add vote amount to claimable reward

## 2020.06.16-c

- add 512 size icons
- add maskable icon
- add aria-label
  Bug fix

## 2020.06.11-a

- add naver verification file
- add sns link (blog, reddit)

## 2020.06.09-a

- delete log util and code
- delete some useEffect functions
- add a tag in link tag

Bug fix

- main page render
- edit username

## 2020.06.08-b

Bug fix

- Infinite calling in Profile page

## 2020.06.08-a

- Add SNS links with icons
- Add multiple endpoint Apollo Client

## 2020.06.04-a

Bug fix

- Exception handling when login failure related to Google's callback
- Redirect to Main page when sign out

## 2020.06.03-a

Bug fix

- login failure
- profile page, pagination failure

## 2020.06.02-a

- Apply GraphQL to profile upload tab

## 2020.06.01-a

- Add alert : convert failed
- Apply new Auth Server Endpoint
- Apply GraphQL to contents_list.tsx, contents_view.tsx

## 2020.05.21-b

- Add Apollo Client
- SSR bugs fix

## 2020.05.21-a

- node_modules/ally.js/util/platform.js edit (Next js bug)

```
// deep clone of original platform
var platform = JSON.parse(
  JSON.stringify(
    _platform3.default || {
      description: 'Node.js 13.11.0 on Darwin 64-bit',
      layout: null,
      manufacturer: null,
      name: 'Node.js',
      prerelease: null,
      product: null,
      ua: null,
      version: '13.11.0',
      os: {
        architecture: 64,
        family: 'Darwin',
        version: null
      }
    }
  )
)
```

## 2020.05.20-b

- Add Apollo Client
- SSR bugs fix

## 2020.05.07-b

- Apply lazy loading to main banner image and avatar
- Bugs fix

## 2020.05.07-a

- Change ellipse library
- Fix bugs
- Apply error image in the avatar, thumbnail
- Change page name in more Tab
- Add \_document.js for lang attribute in <html>
- Add \_static for uploading to S3 bucket

## 2020.04.29-a

- Change brand logo in footer

## 2020.04.28-a

- Add lazy loading
- Change brand logo

## 2020.04.20-a

- Edit test code of 'Claim Complete'
- Edit a domain of 'about_us'
- Edit showing condition of search box

## 2020.04.17-c

- Add test code
- Add month expression in 'timeAgo' Function
- Tracking component division
- fix few bugs
- Edit redux structure
- Remove withdraw/deposit
- Remove see also component
- Remove a parameter 'ethAccount' in project

## 2020.04.09-a

- Edit the credential option of AXIOS

## 1.9.19

- Delete Away mode
- Apply jest

## 1.9.16

- Add Silent Login
- Add a parameter 'redirect url' to login
