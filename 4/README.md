# Python Running Median and Mouse vs Mice

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