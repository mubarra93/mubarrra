//Write a function to search episode by its name.
let len = data._embedded.episodes.length;

let episode_func = (episode_name)=>{
	
for(i=0;i<len;i++)
{
if(episode_name == data._embedded.episodes[i].name)
		{
			console.log(data._embedded.episodes[i])
		}else{}
}		
}

episode_func("The Fuzzy Boots Corollary")