function parsePodcastLink(link) {
  const re = /areena\.yle\.fi\/podcastit\/([\d-]+)/;
  const found = link.match(re)

  return found[1]
}