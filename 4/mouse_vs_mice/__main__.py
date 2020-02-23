import sys
from mouse_vs_mice import mouse

if __name__ == "__main__":
    """Import path to input and pass it to main function"""
    if len(sys.argv) == 1:
        raise ValueError('provide only one argument: path to input file')
    mouse.main(sys.argv[1])
