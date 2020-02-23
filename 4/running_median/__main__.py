from running_median.median import RunningMedian
import sys


def main(filename):
    """Create an instance of a class and run algorithm"""
    instance = RunningMedian(filename)
    instance.run()


if __name__ == "__main__":
    """Import path to input and pass it to main function"""
    if len(sys.argv) == 1:
        raise ValueError('provide only one argument: path to input file')
    main(sys.argv[1])
