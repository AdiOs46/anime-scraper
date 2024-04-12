from collections import defaultdict

def reducer(mapped_data):
    total_mapped_data = defaultdict(list)
    for genre_anime_map in mapped_data:
        for genre, anime_list in genre_anime_map.items():
            total_mapped_data[genre].extend(anime_list)
    return total_mapped_data
