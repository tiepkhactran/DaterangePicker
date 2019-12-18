using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DateRangePickerDemo.Controllers
{
    public class DateRangePickerController : Controller
    {
        // GET: DateRangePicker
        public ActionResult Index(DateTime? start,DateTime? end)
        {
            ViewBag.start = start;
            ViewBag.end = end;
            return View();
        }

    }
}