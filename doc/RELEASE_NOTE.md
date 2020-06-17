# Release Note

## 2020.06.17-a
- add vote amount to clamable reward

## 2020.06.16-c
- bug fix 
- add 512 size icon
- add maskable icon
- add aria-label

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
- node_modules/ally.js/util/platform.js edit  (Next js bug)
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
- Add _document.js for lang attribute in <html>
- Add _static for uploading to S3 bucket

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