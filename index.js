const urlInput = document.getElementById("url")
const add_antennapod = document.getElementById("add_antennapod")

urlInput.onkeyup = (event) => {
  const re = /areena\.yle\.fi\/podcastit\/([\d-]+)/;
  const found = event.srcElement.value.match(re)
  const podcastId = found[1]
  const rssUrl = `https://feeds.yle.fi/areena/v1/series/${podcastId}.rss`
  const subscribeLink = `antennapod-subscribe://${encodeURIComponent(rssUrl)}`.trim()

  add_antennapod.onclick = () => {
    window.location.href = subscribeLink
  }
}
