export const GA_TRACKING_ID = "UA-163831604-1";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,

    });
    
};


export const eventForPixelAddToCart = (action,id, curreny, value) => {
    window.fbq(
        'track', action, { 
        content_type:'product',
        content_ids:id,
        value:value,
        currency: curreny
        }
      );
    
};

export const eventOnProductDetailPage = (id, curreny, value) => {
    window.fbq(
        'track', "ViewContent", { 
        content_type:'product',
        content_ids:id,
        value:value,
        currency: curreny
        }
      );
    
};


export const InitiateCheckout = (id, curreny, value,payment_type) => {
    window.fbq(
        'track', 'InitiateCheckout', { 
        content_type:'product',
        payment_type:payment_type,
        content_ids:id,
        value:value,
        currency: curreny,
        }
      );
};

export const Purchase = (id, curreny, value,payment_type,status) => {
    window.fbq(
        'track', 'Purchase', { 
        content_type:'product',
        payment_type:payment_type,
        payment_status:status,
        content_ids:id,
        value:value,
        currency: curreny,
        }
      );
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const AddToCart = ({ add_to_cart, category, label, value }) => {
    window.gtag("AddToCart", add_to_cart, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
