interface VendorList {
    vendors: VendorItem;
}

interface VendorItem {
    id: number;
    name: string;
    policyUrl: string;
}

const vendors = async () => {
    const vendorsDiv: HTMLElement = document.querySelector('.vendors');
    const response = await fetch('https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json')
        .then((response) => response.json())
        .then((data: VendorList) => {
            const html: string = Object.keys(data.vendors)
                .map((key: string, index: number) => {
                    const vendor: VendorItem = data.vendors[key];
                    return `
                    <div class="vendors__box" data-vendor-id=${vendor.id}>
                        <h3>${vendor.name}</h3>
                        <div class="vendors__consent">
                            <a href=${vendor.policyUrl} target="_blank" rel="noopener">Privacy policy</a>
                            <input type="checkbox" class="accept" id="accept${index}" value="accept" />
                            <label for="accept${index}">Accept</label>
                        </div>
                    </div>
                `;
                })
                .join('');

            vendorsDiv.insertAdjacentHTML('afterbegin', html);
        })
        .catch((err) => {
            vendorsDiv.innerHTML = `<p>Something went wrong.</p>`;
            console.error('Error:', err);
        });

    return response;
};

export default vendors;
