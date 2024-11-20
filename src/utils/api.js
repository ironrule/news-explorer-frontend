/**============================================
 *       Test Code for Article Results
 *=============================================**/
export function getArticles() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve([
        {
          source: {
            id: "67108674677c0825de0832d2",
            name: "Android Central",
          },
          author: "jerry.hildenbrand@futurenet.com (Jerry Hildenbrand)",
          title: "What the AC staff bought on Prime Day",
          description: "Here's what we got while it was on sale.",
          url: "https://www.androidcentral.com/accessories/what-the-ac-staff-bought-on-prime-day",
          urlToImage:
            "https://cdn.mos.cms.futurecdn.net/kuNDnfxYYqJSTdkS9qQWDM-1200-80.jpg",
          publishedAt: "2024-10-09T20:46:01Z",
          content:
            "Here at Android Central we love writing about tech but we're also consumers like everyone else. When it comes to saving money on Amazon's Prime Day we have to get in on the action that same as you!\r\n… [+6123 chars]",
        },
        {
          source: {
            id: "67108674677c0825de0832d3",
            name: "Android Central",
          },
          author: "andrew.myrick@futurenet.com (Andrew Myrick)",
          title: "The Google TV Streamer is more important than you think",
          description:
            "With the Google TV Streamer, not only are we getting a fantastic streaming device, but it's also a smart home hub, cloud gaming hub, and the list goes on.",
          url: "https://www.androidcentral.com/streaming-tv/why-the-google-tv-streamer-is-more-important-than-you-think",
          urlToImage:
            "https://cdn.mos.cms.futurecdn.net/zCJAyKaEZHWppcZcezhaFM-1200-80.jpg",
          publishedAt: "2024-10-11T19:27:17Z",
          content:
            "(Image credit: Nicholas Sutrich / Android Central)\r\nBeyond the Alphabet is a weekly column that focuses on the tech world both inside and out of the confines of Mountain View.\r\nOn August 2, 2021, Goo… [+4539 chars]",
        },
        {
          source: {
            id: "67108319677c0825de0832cc",
            name: "Hackaday",
          },
          author: "Jenny List",
          title: "Portable Pi Palmtop Provides Plenty",
          description:
            "We’ve seen many portable laptops using the Raspberry Pi series of boards in the decade-plus since its launch. The appeal of a cheap board that can run a desktop Linux distro without requiring…",
          url: "https://hackaday.com/2024/10/13/portable-pi-palmtop-provides-plenty/",
          urlToImage:
            "https://hackaday.com/wp-content/uploads/2024/10/pi-palmtop-featured.jpg",
          publishedAt: "2024-10-14T05:00:27Z",
          content:
            "We’ve seen many portable laptops using the Raspberry Pi series of boards in the decade-plus since its launch. The appeal of a cheap board that can run a desktop Linux distro without requiring too muc… [+1172 chars]",
        },
        {
          source: {
            id: "67108319677c0825de0832cd",
            name: "Hackaday",
          },
          author: "Jenny List",
          title: "The Raspberry Pi 500 Hints At Its Existence",
          description:
            "It’s fairly insignificant in the scheme of things, and there’s no hardware as yet for us to look at, but there it is. Tucked away in a device tree file, the first mention of a Raspberry…",
          url: "https://hackaday.com/2024/10/04/the-raspberry-pi-500-hints-at-its-existence/",
          urlToImage:
            "https://hackaday.com/wp-content/uploads/2020/11/DSCF2010_featured.png",
          publishedAt: "2024-10-04T11:00:36Z",
          content:
            "It’s fairly insignificant in the scheme of things, and there’s no hardware as yet for us to look at, but there it is. Tucked away in a device tree file, the first mention of a Raspberry Pi 500. We ta… [+886 chars]",
        },
        {
          source: {
            id: "67108319677c0825de0832ce",
            name: "Hackaday",
          },
          author: "Tom Nardi",
          title: "Printed Rack Holds Pair of LattePandas In Style",
          description:
            "ARM single-board computers like the Raspberry Pi are great for some applications — if you need something that’s energy efficient or can fit into a tight space, they’re tough to …read more",
          url: "https://hackaday.com/2024/10/08/printed-rack-holds-pair-of-lattepandas-in-style/",
          urlToImage:
            "https://hackaday.com/wp-content/uploads/2024/10/cubeframe_feat.jpg",
          publishedAt: "2024-10-08T11:00:14Z",
          content:
            "ARM single-board computers like the Raspberry Pi are great for some applications — if you need something that’s energy efficient or can fit into a tight space, they’re tough to beat. But sometimes yo… [+1861 chars]",
        },
        {
          source: {
            id: "67108319677c0825de0832cf",
            name: "Hackaday",
          },
          author: "Dan Maloney",
          title:
            "Dot-Matrix Printer Brings Old School Feel to Today’s Headlines",
          description:
            "If you remember a time when TV news sets universally incorporated a room full of clattering wire service teleprinters to emphasize the seriousness of the news business, congratulations — you’re …read more",
          url: "https://hackaday.com/2024/10/09/dot-matrix-printer-brings-old-school-feel-to-todays-headlines/",
          urlToImage:
            "https://hackaday.com/wp-content/uploads/2024/10/dotmatrix_news.png",
          publishedAt: "2024-10-09T11:00:00Z",
          content:
            "If you remember a time when TV news sets universally incorporated a room full of clattering wire service teleprinters to emphasize the seriousness of the news business, congratulations — you’re old. … [+1387 chars]",
        },
        {
          source: {
            id: "67108319677c0825de0832d0",
            name: "Hackaday",
          },
          author: "Dave Rowntree",
          title: "A RISC-V LISP Compiler…Written In Lisp",
          description:
            "Ah, Lisp, the archaic language that just keeps on giving. You either love or hate it, but you’ll never stop it. [David Johnson-Davies] is clearly in the love it camp and, to that end, has pro…",
          url: "https://hackaday.com/2024/10/14/a-risc-v-lisp-compiler-written-in-lisp/",
          urlToImage:
            "https://hackaday.com/wp-content/uploads/2023/04/risc5-esp32-c3-thumbnail.jpg",
          publishedAt: "2024-10-15T02:00:47Z",
          content:
            "Ah, Lisp, the archaic language that just keeps on giving. You either love or hate it, but you’ll never stop it. [David Johnson-Davies] is clearly in the love it camp and, to that end, has produced a … [+1225 chars]",
        },
        {
          source: {
            id: "67108319677c0825de0832d1",
            name: "Hackaday",
          },
          author: "Lewin Day",
          title: "Building A Sound Camera For Under $400",
          description:
            "[Benn Jordan] had an idea. He’d heard of motion amplification technology, where cameras are used to capture tiny vibrations in machinery and then visually amplify it for engineering analysis. This …read more",
          url: "https://hackaday.com/2024/10/10/building-a-sound-camera-for-under-400/",
          urlToImage:
            "https://hackaday.com/wp-content/uploads/2024/10/How-To-Make-A-Legit-Sound-Camera-5-37-screenshot.png",
          publishedAt: "2024-10-10T20:00:17Z",
          content:
            "[Benn Jordan] had an idea. He’d heard of motion amplification technology, where cameras are used to capture tiny vibrations in machinery and then visually amplify it for engineering analysis. This is… [+1422 chars]",
        },
      ]);
    }, 1000)
  );
}
/*=============================================*/

/**============================================
 *       Test Code for No Results Found
 *=============================================**/
// export function getArticles() {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve([]);
//     }, 1000)
//   );
// }
/*=============================================*/

/**============================================
 *    Test Code for a User's Saved Articles
 *=============================================**/
export function getSavedArticles() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        source: {
          id: "67108674677c0825de0832d2",
          name: "Android Central",
        },
        author: "jerry.hildenbrand@futurenet.com (Jerry Hildenbrand)",
        title: "What the AC staff bought on Prime Day",
        description: "Here's what we got while it was on sale.",
        url: "https://www.androidcentral.com/accessories/what-the-ac-staff-bought-on-prime-day",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/kuNDnfxYYqJSTdkS9qQWDM-1200-80.jpg",
        publishedAt: "2024-10-09T20:46:01Z",
        content:
          "Here at Android Central we love writing about tech but we're also consumers like everyone else. When it comes to saving money on Amazon's Prime Day we have to get in on the action that same as you!\r\n… [+6123 chars]",
        keyword: "Technology",
      },
      {
        source: {
          id: "67108674677c0825de0832d3",
          name: "Android Central",
        },
        author: "andrew.myrick@futurenet.com (Andrew Myrick)",
        title: "The Google TV Streamer is more important than you think",
        description:
          "With the Google TV Streamer, not only are we getting a fantastic streaming device, but it's also a smart home hub, cloud gaming hub, and the list goes on.",
        url: "https://www.androidcentral.com/streaming-tv/why-the-google-tv-streamer-is-more-important-than-you-think",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/zCJAyKaEZHWppcZcezhaFM-1200-80.jpg",
        publishedAt: "2024-10-11T19:27:17Z",
        content:
          "(Image credit: Nicholas Sutrich / Android Central)\r\nBeyond the Alphabet is a weekly column that focuses on the tech world both inside and out of the confines of Mountain View.\r\nOn August 2, 2021, Goo… [+4539 chars]",
        keyword: "Google TV",
      },
      {
        source: {
          id: "67108319677c0825de0832ce",
          name: "Hackaday",
        },
        author: "Tom Nardi",
        title: "Printed Rack Holds Pair of LattePandas In Style",
        description:
          "ARM single-board computers like the Raspberry Pi are great for some applications — if you need something that’s energy efficient or can fit into a tight space, they’re tough to …read more",
        url: "https://hackaday.com/2024/10/08/printed-rack-holds-pair-of-lattepandas-in-style/",
        urlToImage:
          "https://hackaday.com/wp-content/uploads/2024/10/cubeframe_feat.jpg",
        publishedAt: "2024-10-08T11:00:14Z",
        content:
          "ARM single-board computers like the Raspberry Pi are great for some applications — if you need something that’s energy efficient or can fit into a tight space, they’re tough to beat. But sometimes yo… [+1861 chars]",
        keyword: "LattePanda",
      },
      {
        source: {
          id: "67108319677c0825de0832cc",
          name: "Hackaday",
        },
        author: "Jenny List",
        title: "Portable Pi Palmtop Provides Plenty",
        description:
          "We’ve seen many portable laptops using the Raspberry Pi series of boards in the decade-plus since its launch. The appeal of a cheap board that can run a desktop Linux distro without requiring…",
        url: "https://hackaday.com/2024/10/13/portable-pi-palmtop-provides-plenty/",
        urlToImage:
          "https://hackaday.com/wp-content/uploads/2024/10/pi-palmtop-featured.jpg",
        publishedAt: "2024-10-14T05:00:27Z",
        content:
          "We’ve seen many portable laptops using the Raspberry Pi series of boards in the decade-plus since its launch. The appeal of a cheap board that can run a desktop Linux distro without requiring too muc… [+1172 chars]",
        keyword: "Palmtop",
      },
      {
        source: {
          id: "67108319677c0825de0832cd",
          name: "Hackaday",
        },
        author: "Jenny List",
        title: "The Raspberry Pi 500 Hints At Its Existence",
        description:
          "It’s fairly insignificant in the scheme of things, and there’s no hardware as yet for us to look at, but there it is. Tucked away in a device tree file, the first mention of a Raspberry…",
        url: "https://hackaday.com/2024/10/04/the-raspberry-pi-500-hints-at-its-existence/",
        urlToImage:
          "https://hackaday.com/wp-content/uploads/2020/11/DSCF2010_featured.png",
        publishedAt: "2024-10-04T11:00:36Z",
        content:
          "It’s fairly insignificant in the scheme of things, and there’s no hardware as yet for us to look at, but there it is. Tucked away in a device tree file, the first mention of a Raspberry Pi 500. We ta… [+886 chars]",
        keyword: "Raspberry Pi",
      },
    ])
  );
}
/*=============================================*/
