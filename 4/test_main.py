import unittest
from running_median.median import RunningMedian
from io import StringIO
from contextlib import redirect_stdout
from mouse_vs_mice import mouse


class TestRunner(unittest.TestCase):
    def test_median(self):
        io = StringIO()
        data_dir = 'running_median/data'
        print('test_median')
        for x in range(0, 5):
            io.truncate(0)
            io.seek(0)
            print(f'Test {x}')
            with redirect_stdout(io):
                median = RunningMedian(f'{data_dir}/input0{x}.txt')
                median.run()
            test_output = io.getvalue().strip()
            # with open(f'{data_dir}/test_output0{x}.txt', 'w') as f:
            #     f.write(test_output)
            with open(f'{data_dir}/output0{x}.txt', 'r') as content_file:
                correct_output = content_file.read().strip()
            self.assertEqual(test_output, correct_output)

    def test_mouse(self):
        io = StringIO()
        data_dir = 'mouse_vs_mice/data'
        print('test_mouse')
        for x in range(0, 2):
            io.truncate(0)
            io.seek(0)
            print(f'Test {x}')
            with redirect_stdout(io):
                mouse.main(f'{data_dir}/input0{x}.txt')
            test_output = io.getvalue().strip()
            # with open(f'{data_dir}/test_output0{x}.txt', 'w') as f:
            #     f.write(test_output)
            with open(f'{data_dir}/output0{x}.txt', 'r') as content_file:
                correct_output = content_file.read().strip()
            self.assertEqual(test_output, correct_output)


if __name__ == '__main__':
    unittest.main()
