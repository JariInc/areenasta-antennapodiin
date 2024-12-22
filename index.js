function parseAreenaLink(event) {
  const add_antennapod = document.getElementById("add_antennapod")
  const target = event.explicitOriginalTarget || event.currentTarget || event.target
  const re = /areena\.yle\.fi\/[\S\/]*(\d-[\d]+)/;
  const found = target.value.trim().match(re)

  if (found) {
    const podcastId = found[1]
    const rssUrl = `https://feeds.yle.fi/areena/v1/series/${podcastId}.rss`
    subscribeLink = `https://antennapod.org/deeplink/subscribe/?url=${encodeURIComponent(rssUrl)}`

    add_antennapod.onclick = () => {
      // window.location.href = subscribeLink

const fetchPromise = fetch(rssUrl);

fetchPromise
  .then((response) => {console.log(response.status)})

    }

    add_antennapod.classList.remove('invisible');
  } else {
    add_antennapod.classList.add('invisible');
  }
}
