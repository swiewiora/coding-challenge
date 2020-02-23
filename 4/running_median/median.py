import math
import logging

"""Set logging level and path"""
logging.basicConfig(level=logging.INFO)


class RunningMedian:
    """Provides alghoritm of calculating running median"""
    def __init__(self, filename):
        self.filename = filename

    def run(self):
        self.read_file()

    def read_file(self):
        """Check number of lines and process input file line-by-line"""
        self.N = 0
        self.list = []
        with open(self.filename, 'r') as f:
            for i, line in enumerate(f):
                if i > self.N:
                    raise ValueError('number of lines is incorrect')
                if i == 0:
                    self.N = int(line)
                else:
                    self.list.append(int(line))
                    median = self.get_median()
                    print("{:1.1f}".format(median))

    def get_median(self):
        """Return median of elements in the list.

        If list contains only 1 element, return it.
        If list length is odd, return middle element.
        If list length is even, return the average of the 2 middle elements.
        """
        logging.debug(self.list)

        if len(self.list) == 1:
            return self.list[0]
        if len(self.list) % 2:
            index = int(len(self.list) / 2)
            logging.debug(f'index {index}')
            return self.list[index]
        else:
            i1 = math.floor(len(self.list) / 2) - 1
            i2 = math.ceil(len(self.list) / 2)
            logging.debug(f'index {i1}, {i2}')
            return (self.list[i1] + self.list[i2]) / 2
