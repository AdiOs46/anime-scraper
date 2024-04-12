from collections import defaultdict

def mapper(data):
    genre_anime_map = defaultdict(list)
    for anime in data:
        for genre in anime['genres']:
            genre_anime_map[genre].append(anime['title'])
    return genre_anime_map
