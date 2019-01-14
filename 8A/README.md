# 8A- Review: Rails- Models and Controllers

## Activity 1A: Generate Two Models

Create two tables in your SQL database:
* Table One is named Continents, with the following columns: 
  * continent_name (type is string)
		

* Table Two is named Countries 
  * country_name (type is string)
  * current_population (type is integer)

Once you’ve successfully created the model files, don’t forget to run your migrations to actually create the tables in your database. 


## Activity 1B: Populate the Tables 

**Part 1**

Navigate to the *db/seeds.rb* file, and copy-and-paste the following code (you can also find this in module GitHub repo): 

```ruby
continents = ["North America", "South America", "Africa", "Europe", "Asia", "Australia",  "Antarctica"]
continents.each do |cont| 
	Continent.create({continent_name: cont})
end 
```

In the command line (bash), run: 

```bash
$ rails db:seed
```

**Part 2**

Create country records for the following countries: 

* United States, population: 325700000
* Canada, population: 36710000
* Singapore, 5612000
* Nigeria, 190900000
* Italy, 60590000
* Japan, 126800000
* Peru, 32170000

You can use either update the seeds.rb file (but make sure you delete the previous code) or create the records in 
```bash 
$ rails console
```

## Activity 2: Linking our Tables

* Update our model(s) so that we create a relationship between Continents and Countries. 
* Your updates should adhere to the following specs: 

  * A country record should be linked to the continent it belongs to
  * When the user queries the following, we should get "Asia" as the result: 

```ruby 
Country.where("country_name = ?", "Singapore")[0].continent.continent_name
```

  * Remember, Model.where doesn’t directly return a record, but rather an array of records that match the condition, even when only one record matches. 

## Activity 3: Hooking up the routes and controller

1. Create a route /countries in the file config/routes.rb that by default, will respond with a json that includes all of the country records in the database. 
2. Generate a new countries_controller.rb file, and edit it so that: 
    * When the user navigates to /countries?population_under=10000000, only countries with a population under 10 million should be included in the json response
    * When the user navigates to /countries?population_over=10000000, the opposite should happen 
  
**Bonus**: Edit the countries_controller.rb file so that users can filter countries by continent. This will require Googling, since it involves a concept or two from Rails that we haven’t officially covered. 

*/countries?continent=North+America*

What if the user entered */countries?continent=north+america* ? This fails. How can you update your controller to deal with this edge case? 





