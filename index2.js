//Write a function that can take any number of episode ids as input and
//returns all the information about those episodes.
let len = data._embedded.episodes.length;
let episode_array = [];

let episode_func = (...episode_id)=>{
	
	let episode = {episodeid : episode_id}
	episode_array.push(episode_id)
	let array_len = episode.episodeid.length
	let len = data._embedded.episodes.length;
	for(i=0;i<array_len;i++)
	{
		for(j=0;j<len;j++)
		{
			if(episode.episodeid[i] == data._embedded.episodes[j].id)
			{
				console.log(data._embedded.episodes[j])
			}else{}
		}	
	}
	
	
	
	
}

episode_func(2916,2915,2917,2918);
