import logging

"""Set logging level and path"""
logging.basicConfig(level=logging.INFO)

"""Lists of words used to classify sentences"""
animal_words = ['cheese', 'tail', 'rodent', 'house', 'animal', 'genome',
                'sanitation', 'rat', 'run', 'climb', 'phylogenies', 'ear']
device_words = ['input', 'computer', 'input', 'device', 'click', 'hand',
                'arrow', 'elbow', 'sensor', 'usb']


def read_file(filename):
    """Check number of lines and process input file line-by-line"""
    N = 0
    with open(filename) as f:
        for i, line in enumerate(f):
            if i > N:
                raise ValueError('number of lines is incorrect')
            if i == 0:
                N = int(line)
            else:
                print(process_sentence(line))


def process_sentence(line):
    """Search for each word occurence in line and
    return result of classification.
    If ratings are the same, computer-mouse will be returned
    """
    sentence = line.lower()
    animal_rating = 0
    device_rating = 0

    for word in animal_words:
        if word in sentence:
            logging.debug(f'matched word {word}')
            animal_rating += 1

    for word in device_words:
        if word in sentence:
            logging.debug(f'matched word {word}')
            device_rating += 1

    if animal_rating > device_rating:
        return 'animal'
    else:
        return 'computer-mouse'


def main(filename):
    read_file(filename)
