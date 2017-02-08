using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace PetStoreServer.Services
{
    public class ImageService
    {
        // clientId = a5f5a8a9e31b6f4
        // clientSecret = 930ab2755530077d2dd1c91ed62f6b4950ee4ee9
        public async Task<Uri> UploadImage(byte[] image) {
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Add("Authorization", "Client-ID a5f5a8a9e31b6f4");
            ByteArrayContent content = new ByteArrayContent(image);

            var response = client.PostAsync("https://api.imgur.com/3/image", content);
            var imgurResponse = await response.Result.Content.ReadAsAsync<ImgurResponse>();
            return new Uri(imgurResponse.data.link);
        }
    }

    public class ImgurPicture {
        public string id { get; set; }
        public object title { get; set; }
        public object description { get; set; }
        public int datetime { get; set; }
        public string type { get; set; }
        public bool animated { get; set; }
        public int width { get; set; }
        public int height { get; set; }
        public int size { get; set; }
        public int views { get; set; }
        public int bandwidth { get; set; }
        public object vote { get; set; }
        public bool favorite { get; set; }
        public object nsfw { get; set; }
        public object section { get; set; }
        public object account_url { get; set; }
        public int account_id { get; set; }
        public bool is_ad { get; set; }
        public bool in_gallery { get; set; }
        public string deletehash { get; set; }
        public string name { get; set; }
        public string link { get; set; }
    }

    public class ImgurResponse {
        public ImgurPicture data { get; set; }
        public bool success { get; set; }
        public int status { get; set; }
    }
}
