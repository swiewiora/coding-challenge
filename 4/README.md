# Python Running Median and Mouse vs Mice

## Running Median
A program that calculates the running median of a list. Running means, 
whenever a new element is added to the list, print out the new median value, formatted to one 
position after the decimal point, to ​stdout​. 

Median can be defined as follows: 
- If the length of the list is odd, then the median is the middle element of the sorted list, 
e.g. ​[12.5, 24.7, 30.0]​ the median is 2​4.7 
- If the length of the list is even, then the median is the average of the two middle 
elements of the sorted list, e.g. ​[12.5, 24.7, 25.3, 30.0] the median is ​(24.7 + 
25.3) / 2 = 25.0 

Input is a file formatted as such: 
- On the first line, an integer ​N​ specifying the number of elements to be added to the list 
- N​ integers 

Example: 

	10 
	1 
	2 
	3 
	4 
	5 
	6 
	7 
	8 
	9 
	10 

Output: 

	1.0 
	1.5 
	2.0 
	2.5 
	3.0 
	3.5 
	4.0 
	4.5 
	5.0 
	5.5

## Mouse vs Mice

A program that tries to distinguish the meaning of words within sentences. To be more precise, 
tries to determine whether the sentence you're looking at talks about mice, the rodents with 
the elongated noses, or mice, the input devices used to control a computer. 

Input is a file formatted as such: 
- On the first line, an integer ​N​ specifying the number of sentences to judge 
- N​ sentences 

For each sentence it will output if we're talking about the rodent or the input device by printing 
either ​animal​ or ​computer-mouse.​ 

A solution does not have to pass all of the test cases to be sufficient.

Example:

	2 
	A mouse usually likes cheese. 
	A modern mouse will probably use a laser instead of a ball. 

Output: 

	animal 
	computer-mouse 

## Install

Create a virtual environment (Python 3 built-in venv) and 
activate it:

    python3 -m venv venv
    . venv/bin/activate

Or on Windows cmd:

    python -m venv venv
    venv\Scripts\activate.bat

Install requirements:

    pip install -r requirements.txt

## Run:

    python -m running_median path/to.input.txt
    python -m mouse_vs_mouse path/to.input.txt
    
Output will be printed to stdout.

## Debug

run main script in a debugger of your choice.
Change logging level to DEBUG

    logging.basicConfig(level=logging.DEBUG)

## Test

	python -m test_main