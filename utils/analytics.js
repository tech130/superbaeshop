export const GA_TRACKING_ID = "UA-163831604-1";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    console.log(url)
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,

    });
    // window.gtag('event', 'page_view', {
    //     page_location: url,
    //     page_path: url,
    //     send_to: GA_TRACKING_ID
    //   })
};


// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action, category, curreny, value) => {
    console.log(action, category, curreny, value)
    // let{action, category, curreny, value}=data;
    // window.gtag("event", action, {
    //     event_category: category,
    //     event_label: curreny,
    //     value: value,
    // });
    window.gtag("add_to_cart", action, {
        event_category: category,
        event_label: curreny,
        value: value,
    });
    
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const AddToCart2 = ({ add_to_cart, category, label, value }) => {
    window.gtag("AddToCart", add_to_cart, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
