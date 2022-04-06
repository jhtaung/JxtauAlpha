using api.DTOs;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class AxDocsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        public AxDocsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<List<AxDocDto>>> Get()
        {
            string path = "\\\\mpifilesrv01\\Environments\\Production\\EForms\\Done";

            var files = Directory.GetFiles(path)
                .Select(f => new FileInfo(f))
                .Where(f => f.LastAccessTime > DateTime.Now.Date.AddDays(-3))
                .ToList();

            var dates = new List<AxDocDto>();
            foreach (var file in files)
            {
                var fileNameArr = file.Name.Split("_");
                var dateStr = fileNameArr[fileNameArr.Length - 1];
                dateStr = dateStr.Split(".pdf")[0];

                string year = "2022";
                string monthday = dateStr.Split(year)[0];
                string month = monthday.Substring(0, 1);
                string day = monthday.Length > 2 ? monthday.Substring(1, 2) : monthday.Substring(1, 1);
                string time = dateStr.Split(year)[1];
                string hourminute = time.Split(" ")[0];
                string minute = hourminute.Substring(hourminute.Length - 2, 2);
                string hour = hourminute.Length > 3 ? hourminute.Substring(0, 2) : "0" + hourminute.Substring(0, 1);
                string ampm = time.Split(" ")[1];

                dateStr = year + "-" + month + "-" + day + " " + hour + ":" + minute + " " + ampm;
                var date = DateTime.Parse(dateStr);
                dateStr = date.ToString("yyyy-MM-dd HH:mm");

                var fileDto = new AxDocDto()
                {
                    Name = file.Name,
                    DateStr = dateStr
                };
                dates.Add(fileDto);
            }

            dates = dates.OrderByDescending(x => x.DateStr).ToList();

            return await Task.Run(() =>
            {
                return Ok(dates);
            });
        }
    }
}