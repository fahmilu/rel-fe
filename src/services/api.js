export const fetchData = async (url, locale = 'en') => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
        headers: {
          'Accept-Language': locale
        },
        next: {
            revalidate: 60,
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json().then(data => {
        return data;
      });
    } catch (error) {
      console.log({error});
      throw error;
    }
};

export const fetchPageData = async (slug, locale = 'en') => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages/${slug}`, {
            headers: {
                'Accept-Language': locale
            },
            next: {
                revalidate: 60,
            },
        });
        return await response.json().then(data => {
            return data;
        });
    } catch (error) {
        console.log({error});
        throw error;
    }
};

export const getData = async (endpoint, locale = 'en') => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
            headers: {
                'Accept-Language': locale
            },
            next: {
                revalidate: 60,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.log({error});
        throw error;
    }
};

export const pushData = async (endpoint, data, locale = 'en') => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Language': locale
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Failed to push data');
        }
        
        return await response.json();
    } catch (error) {
        console.log({error});
        throw error;
    }
};
