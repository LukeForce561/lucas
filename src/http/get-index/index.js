const Main = require('@architect/views/main.js')
const arc = require('@architect/functions')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Lucas Ribeiro', // ←  Start by adding your name!
    title: 'This is a test for begin.com!',
    occupation: 'Consultant, Founder, Developer,Evangelist, Manager, Creator',
    location: 'South, FL',
    bio: 'After dropping out of college for the second time. I went to support BPOS, Office 365, and on-Premise needs of many clients. I learned to apply bash scripting and saw how impactful programming was on an enteprise. From their I went on to use Salesforce to make quicker impact for clients. Salesforce allowed me to understand applications interplay with standard and custom data architecture. Soon after I became passionate about ML, and became an expert on the Einstein Platform. At the same time I learned to code in code and python. After leading a team at a fantastic consultancy, I decided to venture out on my own. I am now fortunate enough to be involved in several profitable business, and have helped some of the worlds largest companies advance their use of technology. I truly love empowering people at companies I have worked with do more meaningful work, because we have automated some monotany.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'lucas@riverBI.com',
    twitter: 'riverBI_consult',
    linkedin: 'lucasriverbi',
    instagram: 'lucasriverbi',
    facebook: 'LucasRibeiro561',

    /**
     * Layout
     */
    photographer: 'Unsure',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    //image: arc.static('background.jpg', {stagePath: false})
    image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
