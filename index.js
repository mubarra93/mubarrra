//Write a function that takes Season number and episode number as input
//and gives all the information about that particular episode as output.

let len = data._embedded.episodes.length;
//alert(len)


let episode_func = (season_number,episode_number)=>{
for(i=0;i<len;i++)
{
	if(season_number == data._embedded.episodes[i].season)
	{
		if(episode_number == data._embedded.episodes[i].number)
		{
			console.log(data._embedded.episodes[i])
		}else{}
	}else{}
}
}


episode_func(1,1)
