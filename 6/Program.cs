using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp1
{
	class Customer
	{
		public string name { get; set; }
		public DateTime Birthday { get; set; }
		public bool IsMale { get; set; }

		public Customer(string name, DateTime birthday, bool isMale)
		{
			this.name = name;
			this.Birthday = birthday;
			this.IsMale = isMale;
		}
	}

	class CustomerHandler
	{
		public float getAverageAge(List<Customer> customers)
		{
			List<float> Ages = new List<float>();
			foreach (Customer customer in customers) {
				Ages.Add((DateTime.Now - customer.Birthday).Days / 365);
			}

			return Ages.Average();
		}

		public List<Customer> getMales(List<Customer> customers) {
			List<Customer> Males = new List<Customer>();
			foreach (Customer customer in customers)
			{
				if (customer.IsMale) Males.Add(customer);
			}

			return Males;
		}
		public List<Customer> getFemales(List<Customer> customers) {
			List<Customer> Females = new List<Customer>();
			foreach (Customer customer in customers)
			{
				if (! customer.IsMale) Females.Add(customer);
			}

			return Females;
		}
	}

	class Program
	{

		static void Main(string[] args)
		{
			List<Customer> Customers = new List<Customer>
			{
				new Customer("Jan", new DateTime(1990, 01, 01), true),
				new Customer("Jana", new DateTime(1992, 01, 01), false),
				new Customer("Adam", new DateTime(1993, 01, 01), true),
				new Customer("Ewa", new DateTime(1994, 01, 01), false)
			};

			CustomerHandler customerHandler = new CustomerHandler();
			float AverageAge = customerHandler.getAverageAge(Customers);
			List<Customer> males = customerHandler.getMales(Customers);
			float AverageAgeMales = customerHandler.getAverageAge(males);
			List<Customer> females = customerHandler.getFemales(Customers);
			float AverageAgeFemales = customerHandler.getAverageAge(females);
		}
	}
}
